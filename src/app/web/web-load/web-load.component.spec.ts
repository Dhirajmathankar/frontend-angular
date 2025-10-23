import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLoadComponent } from './web-load.component';

describe('WebLoadComponent', () => {
  let component: WebLoadComponent;
  let fixture: ComponentFixture<WebLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
