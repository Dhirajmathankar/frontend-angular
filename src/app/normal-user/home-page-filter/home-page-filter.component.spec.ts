import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFilterComponent } from './home-page-filter.component';

describe('HomePageFilterComponent', () => {
  let component: HomePageFilterComponent;
  let fixture: ComponentFixture<HomePageFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
