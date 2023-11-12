import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country, Product } from 'src/app/classes/product';
import { DatabaseService } from 'src/app/services/database.service';
import { Loader, ToastError, ToastSuccess } from 'src/environments/environment';

@Component({
	selector: 'app-new-product',
	templateUrl: './new-product.component.html',
	styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
	prodForm: FormGroup;
	countryDisplay: string = '';

	constructor(private fb: FormBuilder, private db: DatabaseService) {
		this.prodForm = fb.group({
			code: [
				'', [
					Validators.required,
				]
			],
			desc: [
				'', [
					Validators.required,
					Validators.maxLength(255),
				]
			],
			price: [
				0, [
					Validators.required,
					Validators.min(1),
				]
			],
			stock: [
				0, [
					Validators.required,
					Validators.min(0),
				]
			],
			countryFrom: [
				{ code: '', name: '' }, [
					Validators.required,
				]
			],
			isEdible: true
		});
	}

	selectCountry(country: any) {
		if (country !== null && country.name.common !== null) {
			this.prodForm.controls['countryFrom'].setValue({ code: country.cca3, name: country.name.common });
			this.countryDisplay = `${country.name.common}, ${country.cca3}`;
		}
	}

	async submitProd() {
		const code: string = this.prodForm.controls['code'].value;
		const desc: string = this.prodForm.controls['desc'].value;
		const price: number = this.prodForm.controls['price'].value;
		const stock: number = this.prodForm.controls['stock'].value;
		const countryFrom: Country = this.prodForm.controls['countryFrom'].value;
		const isEdible: boolean = this.prodForm.controls['isEdible'].value;

		const prod = new Product(code, desc, price, stock, countryFrom, isEdible);
		Loader.fire();
		this.db.addData('products', prod)
			.then(() => ToastSuccess.fire('Product uploaded!'))
			.catch(() => ToastError.fire('There was a problem.'));
		Loader.close();
	}
}
