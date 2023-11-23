import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NewProductComponent } from '../../components/products/new-product/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { ProductDetailComponent } from '../../components/products/product-detail/product-detail.component';
import { ProductListComponent } from '../../components/products/product-list/product-list.component';
import { ProductDescriptionComponent } from '../../components/products/product-description/product-description.component';
import { CountryInfoComponent } from '../../components/country-info/country-info.component';
import { PublicListComponent } from '../../components/products/public-list/public-list.component';

@NgModule({
	declarations: [
		NewProductComponent,
		CountryListComponent,
		ProductDetailComponent,
		ProductListComponent,
		ProductDescriptionComponent,
		CountryInfoComponent,
		PublicListComponent,
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		ReactiveFormsModule,
	],
	exports: [ProductListComponent]
})
export class ProductsModule { }
