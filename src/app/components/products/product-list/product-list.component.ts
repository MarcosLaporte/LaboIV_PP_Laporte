import { Component, EventEmitter, Output, SimpleChanges, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { DatabaseService } from 'src/app/services/database.service';
import { Loader } from 'src/environments/environment';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
	@Output() prodEv = new EventEmitter<Product>();
	products: Array<Product> = [];
	@Input() filterFunc: (prod: Product) => boolean = () => true;
	sortFunc: (a: Product, b: Product) => number = (a, b) => a.desc > b.desc ? 1 : -1;

	constructor(private db: DatabaseService) {
		db.getData<Product>('products')
			.then(data => this.products = data);
	}

	ngOnInit() {
		this.db.listenColChanges<Product>('products', this.products, this.filterFunc, this.sortFunc);
	}

	onSelect(product: Product) {
		this.prodEv.emit(product);
	}
}
