import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVendorsListComponent } from './admin-vendors-list.component';

describe('AdminVendorsListComponent', () => {
  let component: AdminVendorsListComponent;
  let fixture: ComponentFixture<AdminVendorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVendorsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVendorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
