import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmContainerComponent } from './../../components/container/adm-container/adm-container.component';
import { AddContainerComponent } from './../../components/container/add-container/add-container.component';
import { DeleteContainerComponent } from './../../components/container/delete-container/delete-container.component';
import { ModifyContainerComponent } from './../../components/container/modify-container/modify-container.component';
import { ContainerListComponent } from './../../components/container/container-list/container-list.component';
import { ProductsModule } from '../products/products.module';
import { LoadContainerComponent } from '../../components/container/load-container/load-container.component';

@NgModule({
	declarations: [
		AdmContainerComponent,
		AddContainerComponent,
		DeleteContainerComponent,
		ModifyContainerComponent,
		ContainerListComponent,
		LoadContainerComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ContainersRoutingModule,
		ReactiveFormsModule,
		ProductsModule
	]
})
export class ContainersModule { }
