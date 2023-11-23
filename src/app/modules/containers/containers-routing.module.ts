import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmContainerComponent } from 'src/app/components/container/adm-container/adm-container.component';
import { LoadContainerComponent } from 'src/app/components/container/load-container/load-container.component';

const routes: Routes = [
	{
		path: 'adm',
		component: AdmContainerComponent
	},
	{
		path: 'load',
		component: LoadContainerComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
