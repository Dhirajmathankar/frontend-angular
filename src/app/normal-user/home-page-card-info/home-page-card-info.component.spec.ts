import { Component } from '@angular/core';

interface Venue {
  id: string;
  title: string;
  img: string;
  price: string;
  capacity: string;
  location: string;
}

@Component({
  selector: 'app-home-page-card-info',
  templateUrl: './home-page-card-info.component.html',
  styleUrls: ['./home-page-card-info.component.scss']
})
export class HomePageCardInfoComponent {

  // QUICK VIEW
  quickViewVisible = false;
  quickViewData: Venue | null = null;

  // COMPARE
  compareVisible = false;
  compareList: Venue[] = [];

  // ---------- QUICK VIEW ----------
  showQuickView(data: Venue) {
    this.quickViewData = data;
    this.quickViewVisible = true;
  }

  closeQuickView() {
    this.quickViewVisible = false;
  }

  // ---------- COMPARE ----------
  toggleCompare(data: Venue) {
    const exist = this.compareList.find(v => v.id === data.id);

    if (exist) {
      this.compareList = this.compareList.filter(v => v.id !== data.id);
    } else {
      if (this.compareList.length >= 3) {
        alert("You can compare maximum 3 venues.");
        return;
      }
      this.compareList.push(data);
    }

    this.compareVisible = this.compareList.length > 0;
  }

  removeFromCompare(id: string) {
    this.compareList = this.compareList.filter(v => v.id !== id);
    if (this.compareList.length === 0) this.compareVisible = false;
  }

  closeCompare() {
    this.compareVisible = false;
  }
}
