import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Container } from 'src/app/classes/container';
import { Loader, ToastError, ToastSuccess } from 'src/environments/environment';

@Component({
	selector: 'app-adm-container',
	templateUrl: './adm-container.component.html',
	styleUrls: ['./adm-container.component.css']
})
export class AdmContainerComponent {
	/* un componente que borra un componente que tiene por INPUT. */
	chosenCont: Container | undefined;

	constructor(private db: DatabaseService) { }

	chooseCont(container: Container) {
		this.chosenCont = container;
	}

	async addContainer(container: Container) {
		Loader.fire();
		await this.db.addDataAutoId('containers', container)
			.then(() => ToastSuccess.fire('Container added.'))
			.catch(() => ToastError.fire('There was a problem while adding the container.'));
		Loader.close();
	}
}
