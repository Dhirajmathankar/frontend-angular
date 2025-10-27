import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachFilterComponent } from './search-filter.component';

describe('SerachFilterComponent', () => {
  let component: SerachFilterComponent;
  let fixture: ComponentFixture<SerachFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
