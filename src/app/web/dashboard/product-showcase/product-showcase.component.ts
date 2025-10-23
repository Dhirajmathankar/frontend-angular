import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseData, ShowcaseItem } from './data.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-showcase',
  templateUrl: './product-showcase.component.html',
  styleUrls: ['./product-showcase.component.scss']
})
export class ProductShowcaseComponent {

   @Input() data: ShowcaseData | null = null;

  // Selected plugin ko track karne ke liye
  selectedPluginId: string | null = ''; // Default selection


    constructor( private router: Router) {}
  

  // Plugin select karne ke liye function
  selectPlugin(plugin: ShowcaseItem): void {
    console.log("plugin..........", plugin)
    this.selectedPluginId = plugin.id;
    this.router.navigate(['/dashboard/web']);
  }

  selectedId: number | null = null;

selectItem(item: any) {
  this.selectedId = item.id;
  console.log("Selected Item:", item);
}

}
