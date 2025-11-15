import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EncryptionService {

  // Convert base64 string → Uint8Array
  private base64ToUint8Array(base64: string): Uint8Array {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  // Convert Uint8Array → base64 string
  private uint8ArrayToBase64(bytes: Uint8Array): string {
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  // Import key from Uint8Array into CryptoKey
  private async importKey(rawKey: Uint8Array): Promise<CryptoKey> {
    const keyBuffer : any = rawKey.buffer.slice(0); // ✅ fixes type issue
    return crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'AES-GCM' },
      false,
      ['encrypt', 'decrypt']
    );
  }

  // Generate or reuse the AES key
  async ensureKey(): Promise<CryptoKey> {
    let keyBase64 = sessionStorage.getItem(environment.CRYPTO_KEY_STORAGE);
    if (!keyBase64) {
      const randomBytes = crypto.getRandomValues(new Uint8Array(32)); // AES-256 key
      keyBase64 = this.uint8ArrayToBase64(randomBytes);
      sessionStorage.setItem(environment.CRYPTO_KEY_STORAGE, keyBase64);
    }
    const rawKey = this.base64ToUint8Array(keyBase64);
    return this.importKey(rawKey);
  }

  // Encrypt a plaintext string
  async encrypt(plainText: string): Promise<{ data: string; iv: string }> {
    const key = await this.ensureKey();
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV
    const encoded = new TextEncoder().encode(plainText);

    const cipherBuffer = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encoded
    );

    return {
      data: this.uint8ArrayToBase64(new Uint8Array(cipherBuffer)),
      iv: this.uint8ArrayToBase64(iv)
    };
  }

  // Decrypt the payload
  async decrypt(payload: { data: string; iv: string }): Promise<string | null> {
    try {
      const key = await this.ensureKey();
      const data : any = this.base64ToUint8Array(payload.data);
      const iv : any = this.base64ToUint8Array(payload.iv);

      const plainBuffer = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        data
      );
      return new TextDecoder().decode(plainBuffer);
    } catch (err) {
      console.error('Decryption failed', err);
      return null;
    }
  }

  // Clear encryption key (for logout)
  clearKey(): void {
    sessionStorage.removeItem(environment.CRYPTO_KEY_STORAGE);
  }
}
