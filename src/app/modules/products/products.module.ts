import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NewProductComponent } from '../../components/new-product/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryListComponent } from '../../components/country-list/country-list.component';

@NgModule({
	declarations: [
		NewProductComponent,
		CountryListComponent,
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		ReactiveFormsModule,
	]
})
export class ProductsModule { }
