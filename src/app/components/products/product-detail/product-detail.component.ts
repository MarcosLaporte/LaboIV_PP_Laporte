import { Component } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
	chosenProd: Product | undefined;

	constructor(private db: DatabaseService) {}

	selectProduct(product: Product) {
		this.chosenProd = product;
	}
}
