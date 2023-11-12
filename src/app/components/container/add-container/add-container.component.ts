import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/classes/container';

@Component({
  selector: 'app-add-container',
  templateUrl: './add-container.component.html',
  styleUrls: ['./add-container.component.css']
})
export class AddContainerComponent {
	@Output() newContainerEv = new EventEmitter<Container>();
	contForm: FormGroup;

	constructor (private fb: FormBuilder) {
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

	createCont() {
		const code = this.contForm.controls['code'].value;
		const color = this.contForm.controls['color'].value;
		const company = this.contForm.controls['company'].value;
		const strgCapacity = this.contForm.controls['strgCapacity'].value;

		const newCont = new Container(code, color, company, strgCapacity);
		this.contForm.reset();
		this.newContainerEv.emit(newCont);
	}
}
