import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCardInfoComponent } from './home-page-card-info.component';

describe('HomePageCardInfoComponent', () => {
  let component: HomePageCardInfoComponent;
  let fixture: ComponentFixture<HomePageCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageCardInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
