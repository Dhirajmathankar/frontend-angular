import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalPlaningResourcesComponent } from './festival-planing-resources.component';

describe('FestivalPlaningResourcesComponent', () => {
  let component: FestivalPlaningResourcesComponent;
  let fixture: ComponentFixture<FestivalPlaningResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalPlaningResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalPlaningResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
