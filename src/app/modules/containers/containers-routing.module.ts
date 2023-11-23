import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmContainerComponent } from 'src/app/components/container/adm-container/adm-container.component';

const routes: Routes = [
	{
		path: 'adm',
		component: AdmContainerComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
