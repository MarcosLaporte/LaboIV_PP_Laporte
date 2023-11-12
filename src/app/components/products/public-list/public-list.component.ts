import { Component } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-public-list',
  templateUrl: './public-list.component.html',
  styleUrls: ['./public-list.component.css']
})
export class PublicListComponent {
	existingStockFilter = (prod: Product) => prod.stock > 0;
}
