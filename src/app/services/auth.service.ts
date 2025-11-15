import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EncryptionService } from './encryption.service';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient, private enc: EncryptionService) {}

  login(email: string, password: string) {
	console.log('AuthService.login called with')
    return this.http.post<any>(`${this.base}/auth/login`, { email, password }).pipe(
      map(async res => {
        // res should contain accessToken, refreshToken, user
        if (res?.accessToken) {
          // encrypt tokens
          const encA = await this.enc.encrypt(res.accessToken);
          sessionStorage.setItem(environment.ACCESS_STORAGE, JSON.stringify(encA));

          if (res.refreshToken) {
            const encR = await this.enc.encrypt(res.refreshToken);
            sessionStorage.setItem(environment.REFRESH_STORAGE, JSON.stringify(encR));
          }

          // store user profile plain (non-sensitive)
          sessionStorage.setItem(environment.USER_STORAGE, JSON.stringify(res.user || {}));
        }
        return res;
      }),
      // map returns Promise, convert to Observable resolving to original response
      // so consumers can await by doing `.subscribe(async p=> await p)`
      map(promiseOrValue => promiseOrValue)
    );
  }

  async getAccessToken(): Promise<string | null> {
    const encStr = sessionStorage.getItem(environment.ACCESS_STORAGE);
    if (!encStr) return null;
    const payload = JSON.parse(encStr);
    return this.enc.decrypt(payload);
  }

  async getRefreshToken(): Promise<string | null> {
    const encStr = sessionStorage.getItem(environment.REFRESH_STORAGE);
    if (!encStr) return null;
    const payload = JSON.parse(encStr);
    return this.enc.decrypt(payload);
  }

  getUserProfile() {
    const raw = sessionStorage.getItem(environment.USER_STORAGE);
    return raw ? JSON.parse(raw) : null;
  }

  // clear everything
  async logout(): Promise<void> {
    sessionStorage.removeItem(environment.ACCESS_STORAGE);
    sessionStorage.removeItem(environment.REFRESH_STORAGE);
    sessionStorage.removeItem(environment.USER_STORAGE);
    this.enc.clearKey();
    // optionally call backend logout endpoint
    try {
      const token = await this.getAccessToken();
      if (token) {
        await this.http.post(`${this.base}/auth/logout`, {}).toPromise();
      }
    } catch (err) {
      // ignore network errors
    }
  }

  // refresh access token using refresh token
  async refreshAccessToken(): Promise<string | null> {
    const refreshToken = await this.getRefreshToken();
    if (!refreshToken) return null;
    try {
      const resp: any = await this.http.post(`${this.base}/auth/refresh`, { refreshToken }).toPromise();
      if (resp?.accessToken) {
        const encA = await this.enc.encrypt(resp.accessToken);
        sessionStorage.setItem(environment.ACCESS_STORAGE, JSON.stringify(encA));
        return resp.accessToken;
      }
      return null;
    } catch (err) {
      console.error('Refresh failed', err);
      return null;
    }
  }

  // decode jwt payload (no verification) — just for convenience in frontend
  decodeToken(token: string | null): any {
    if (!token) return null;
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      const payload = JSON.parse(atob(parts[1].replace(/-/g,'+').replace(/_/g,'/')));
      return payload;
    } catch {
      return null;
    }
  }
}
