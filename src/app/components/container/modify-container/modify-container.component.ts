import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/classes/container';
import { DatabaseService } from 'src/app/services/database.service';
import { Loader, ToastError, ToastSuccess } from 'src/environments/environment';

@Component({
	selector: 'app-modify-container',
	templateUrl: './modify-container.component.html',
	styleUrls: ['./modify-container.component.css']
})
export class ModifyContainerComponent {
	contForm: FormGroup;
	@Input() container: Container | undefined;
	@Output() contEv = new EventEmitter<Container>();

	constructor(private fb: FormBuilder, private db: DatabaseService) {
		this.contForm = fb.group({
			code: [
				'', [
					Validators.required,

				]
			],
			color: [
				'#000000', [
					Validators.required,

				]
			],
			company: [
				'', [
					Validators.required,

				]
			],
			strgCapacity: [
				100, [
					Validators.required,
					Validators.min(100),
				]
			],
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['container']) {
			this.contForm.setValue({
				code: this.container ? this.container.code : '',
				color: this.container ? this.container.color : '#000000',
				company: this.container ? this.container.company : '',
				strgCapacity: this.container ? this.container.strgCapacity : 100
			})
		}
	}

	async updateCont() {
		const code = this.contForm.controls['code'].value;
		const color = this.contForm.controls['color'].value;
		const company = this.contForm.controls['company'].value;
		const strgCapacity = this.contForm.controls['strgCapacity'].value;

		Loader.fire();
		this.contEv.emit(undefined);
		await this.db.updateDoc('containers', this.container!.id, {
			code: code,
			color: color,
			company: company,
			strgCapacity: strgCapacity
		})
			.then(() => ToastSuccess.fire('Container modified.'))
			.catch(() => ToastError.fire('There was a problem while updating the container.'));
		this.contForm.reset();
		Loader.close();
		// this.container = undefined;
	}
}
