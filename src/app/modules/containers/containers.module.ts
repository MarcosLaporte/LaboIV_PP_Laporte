import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { AdmContainerComponent } from './../../components/container/adm-container/adm-container.component';
import { AddContainerComponent } from './../../components/container/add-container/add-container.component';
import { DeleteContainerComponent } from './../../components/container/delete-container/delete-container.component';
import { ModifyContainerComponent } from './../../components/container/modify-container/modify-container.component';
import { ContainerListComponent } from './../../components/container/container-list/container-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AdmContainerComponent,
		AddContainerComponent,
		DeleteContainerComponent,
		ModifyContainerComponent,
		ContainerListComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ContainersRoutingModule,
		ReactiveFormsModule,
	]
})
export class ContainersModule { }
