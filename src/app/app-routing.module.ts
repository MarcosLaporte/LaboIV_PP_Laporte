import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdmContainerComponent } from './components/container/adm-container/adm-container.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{
		path: 'products',
		loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
	},
	{
		path: 'container',
		canActivate: [adminGuard],
		component: AdmContainerComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
