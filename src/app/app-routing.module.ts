import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
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
		path: 'containers',
		canActivate: [adminGuard],
		loadChildren: () => import('./modules/containers/containers.module').then(m => m.ContainersModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
