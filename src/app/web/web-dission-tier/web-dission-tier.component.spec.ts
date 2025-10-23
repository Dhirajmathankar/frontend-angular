import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDissionTierComponent } from './web-dission-tier.component';

describe('WebDissionTierComponent', () => {
  let component: WebDissionTierComponent;
  let fixture: ComponentFixture<WebDissionTierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDissionTierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDissionTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
