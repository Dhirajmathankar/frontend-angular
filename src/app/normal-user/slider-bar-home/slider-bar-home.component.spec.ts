import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBarHomeComponent } from './slider-bar-home.component';

describe('SliderBarHomeComponent', () => {
  let component: SliderBarHomeComponent;
  let fixture: ComponentFixture<SliderBarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBarHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
