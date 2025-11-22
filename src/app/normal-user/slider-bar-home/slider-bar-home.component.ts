import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-bar-home',
  templateUrl: './slider-bar-home.component.html',
  styleUrls: ['./slider-bar-home.component.scss']
})
export class SliderBarHomeComponent implements OnInit {

  currentSlide = 0;

  ngOnInit() {
    this.showSlide(this.currentSlide);

    // Auto slide every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  showSlide(index: number) {
    const slides = document.querySelectorAll('.hero-slide');

    slides.forEach((s, i) => {
      (s as HTMLElement).style.display = i === index ? 'flex' : 'none';
    });

    this.currentSlide = index;
  }

  nextSlide() {
    const totalSlides = document.querySelectorAll('.hero-slide').length;
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
    this.showSlide(this.currentSlide);
  }

  prevSlide() {
    const totalSlides = document.querySelectorAll('.hero-slide').length;
    this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
    this.showSlide(this.currentSlide);
  }
}
