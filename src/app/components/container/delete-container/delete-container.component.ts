import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Container } from 'src/app/classes/container';
import { DatabaseService } from 'src/app/services/database.service';
import { Loader, ToastError, ToastSuccess } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-delete-container',
	templateUrl: './delete-container.component.html',
	styleUrls: ['./delete-container.component.css']
})
export class DeleteContainerComponent {
	@Input() container: Container | undefined;
	@Output() contEv = new EventEmitter<Container>();

	constructor(private db: DatabaseService) { }

	async deleteCont() {
		await Swal.fire({
			title: "Confirm",
			text: 'Are you sure you want to delete this container?',
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			cancelButtonText: "No",
			confirmButtonText: "Yes"
		}).then(async (result) => {
			if (result.isConfirmed) {
				Loader.fire();
				this.contEv.emit(undefined);
				await this.db.deleteDoc('containers', this.container!.id)
					.then(() => ToastSuccess.fire('Container deleted.'))
					.catch(() => ToastError.fire('There was a problem while deleting the container.'));
				Loader.close();
			}
		});
	}
}
