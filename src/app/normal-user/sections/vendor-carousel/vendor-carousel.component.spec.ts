import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCarouselComponent } from './vendor-carousel.component';

describe('VendorCarouselComponent', () => {
  let component: VendorCarouselComponent;
  let fixture: ComponentFixture<VendorCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
