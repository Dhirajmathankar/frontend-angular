import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  public showAddProductModal: boolean = false;

  back() {
    if (this.showAddProductModal) {
      this.showAddProductModal = false;
    }else {
      this.showAddProductModal = false;
    }
  }
  openAddProductModal() {
    this.showAddProductModal = true;
  }
}
