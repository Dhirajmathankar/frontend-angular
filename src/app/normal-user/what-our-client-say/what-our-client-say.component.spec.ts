import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOurClientSayComponent } from './what-our-client-say.component';

describe('WhatOurClientSayComponent', () => {
  let component: WhatOurClientSayComponent;
  let fixture: ComponentFixture<WhatOurClientSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatOurClientSayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatOurClientSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
