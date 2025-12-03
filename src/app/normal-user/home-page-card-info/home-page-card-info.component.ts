import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-card-info',
  templateUrl: './home-page-card-info.component.html',
  styleUrls: ['./home-page-card-info.component.scss']
})
export class HomePageCardInfoComponent {

  venues = [
    {
      id: 'venue1',
      title: 'The Taj Palace Hotel',
      img: 'https://picsum.photos/seed/taj1/400/300',
      price: '₹2,50,000/day',
      capacity: '400',
      location: 'Chanakyapuri, Delhi',
      events: ['Wedding', 'Reception', 'Sangeet'],
      desc: 'Luxurious ballroom with premium amenities.',
      stars: 5,
      reviews: 425,
      wishlist: false,
      slider: [
        'https://picsum.photos/seed/taj11/900/550',
        'https://picsum.photos/seed/taj12/900/550',
        'https://picsum.photos/seed/taj13/900/550'
      ]
    },

    {
      id: 'venue2',
      title: 'Rajmahal Palace',
      img: 'https://picsum.photos/seed/rj1/400/300',
      price: '₹1,80,000/day',
      capacity: '600',
      location: 'Jaipur, Rajasthan',
      events: ['Wedding', 'Engagement', 'Reception'],
      desc: 'Royal palace for premium celebrations.',
      stars: 4,
      reviews: 389,
      wishlist: false,
      slider: [
        'https://picsum.photos/seed/rj11/900/550',
        'https://picsum.photos/seed/rj12/900/550',
        'https://picsum.photos/seed/rj13/900/550'
      ]
    },

    {
      id: 'venue3',
      title: 'Skyline Lounge',
      img: 'https://picsum.photos/seed/sk1/400/300',
      price: '₹80,000/day',
      capacity: '150',
      location: 'Worli, Mumbai',
      events: ['Engagement', 'Cocktail Party', 'Sangeet'],
      desc: 'Beautiful rooftop lounge.',
      stars: 4,
      reviews: 312,
      wishlist: false,
      slider: [
        'https://picsum.photos/seed/sk11/900/550',
        'https://picsum.photos/seed/sk12/900/550',
        'https://picsum.photos/seed/sk13/900/550'
      ]
    },

    {
      id: 'venue4',
      title: 'Lakeview Garden',
      img: 'https://picsum.photos/seed/lv1/400/300',
      price: '₹2,20,000/day',
      capacity: '350',
      location: 'Udaipur, Rajasthan',
      events: ['Wedding', 'Mehendi', 'Haldi'],
      desc: 'Scenic outdoor lake venue.',
      stars: 5,
      reviews: 278,
      wishlist: false,
      slider: [
        'https://picsum.photos/seed/lv11/900/550',
        'https://picsum.photos/seed/lv12/900/550',
        'https://picsum.photos/seed/lv13/900/550'
      ]
    },

    {
      id: 'venue5',
      title: 'Nandi Grand Hall',
      img: 'https://picsum.photos/seed/ng1/400/300',
      price: '₹95,000/day',
      capacity: '250',
      location: 'Whitefield, Bangalore',
      events: ['Reception', 'Sangeet', 'Engagement'],
      desc: 'Modern and spacious hall.',
      stars: 4,
      reviews: 196,
      wishlist: false,
      slider: [
        'https://picsum.photos/seed/ng11/900/550',
        'https://picsum.photos/seed/ng12/900/550',
        'https://picsum.photos/seed/ng13/900/550'
      ]
    },

    {
      id: 'venue6',
      title: 'Beach Paradise Resort',
      img: 'https://picsum.photos/seed/bp1/400/300',
      price: '₹1,50,000/day',
      capacity: '300',
      location: 'Calangute, Goa',
      events: ['Wedding', 'Reception', 'Sangeet'],
      desc: 'Beachfront luxury resort.',
      stars: 4,
      reviews: 456,
      wishlist: false,
      slider: [
        'https://picsum.photos/seed/bp11/900/550',
        'https://picsum.photos/seed/bp12/900/550',
        'https://picsum.photos/seed/bp13/900/550'
      ]
    }
  ];


  /* -------------------------------
        WISHLIST
  -------------------------------- */
  toggleWishlist(v: any) {
    v.wishlist = !v.wishlist;
  }


  /* -------------------------------
        QUICK VIEW
  -------------------------------- */
  quickViewVisible = false;
  quickViewData: any = null;
  sliderIndex = 0;

  showQuickView(v: any) {
    this.quickViewData = v;
    this.sliderIndex = 0;
    this.quickViewVisible = true;
  }

  closeQuickView() {
    this.quickViewVisible = false;
  }

  nextSlide() {
    this.sliderIndex =
      (this.sliderIndex + 1) % this.quickViewData.slider.length;
  }

  prevSlide() {
    this.sliderIndex =
      (this.sliderIndex - 1 + this.quickViewData.slider.length) %
      this.quickViewData.slider.length;
  }



  /* -------------------------------
        COMPARE SYSTEM
  -------------------------------- */
  compareVisible = false;
  compareTableVisible = false;   // NEW

  compareList: any[] = [];

  toggleCompare(v: any) {
    if (!this.compareList.find(x => x.id === v.id)) {
      this.compareList.push(v);
    }
    this.compareVisible = true;
  }

  removeFromCompare(id: string) {
    this.compareList = this.compareList.filter(x => x.id !== id);
  }

  closeCompare() {
    this.compareVisible = false;
  }

  /* --- OPEN BIG TABLE --- */
  openCompareTable() {
    this.compareVisible = false;
    this.compareTableVisible = true;
  }

  /* --- CLOSE BIG TABLE --- */
  closeCompareTable() {
    this.compareTableVisible = false;
  }

}
