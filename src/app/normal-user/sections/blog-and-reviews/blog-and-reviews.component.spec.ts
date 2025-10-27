import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAndReviewsComponent } from './blog-and-reviews.component';

describe('BlogAndReviewsComponent', () => {
  let component: BlogAndReviewsComponent;
  let fixture: ComponentFixture<BlogAndReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAndReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAndReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
