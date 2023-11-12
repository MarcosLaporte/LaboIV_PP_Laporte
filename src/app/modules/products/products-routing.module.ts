import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from 'src/app/components/products/new-product/new-product.component';
import { ProductDetailComponent } from 'src/app/components/products/product-detail/product-detail.component';
import { PublicListComponent } from 'src/app/components/products/public-list/public-list.component';
import { loggedGuard } from 'src/app/guards/logged.guard';

const routes: Routes = [
	{
		path: 'new-product',
		canActivate: [loggedGuard],
		component: NewProductComponent
	},
	{
		path: 'details',
		canActivate: [loggedGuard],
		component: ProductDetailComponent
	},
	{
		path: 'list',
		component: PublicListComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule { }
