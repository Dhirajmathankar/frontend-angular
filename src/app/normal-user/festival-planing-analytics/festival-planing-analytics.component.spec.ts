import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalPlaningAnalyticsComponent } from './festival-planing-analytics.component';

describe('FestivalPlaningAnalyticsComponent', () => {
  let component: FestivalPlaningAnalyticsComponent;
  let fixture: ComponentFixture<FestivalPlaningAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalPlaningAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalPlaningAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
