import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseWebStructureComponent } from './base-web-structure.component';

describe('BaseWebStructureComponent', () => {
  let component: BaseWebStructureComponent;
  let fixture: ComponentFixture<BaseWebStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseWebStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseWebStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
