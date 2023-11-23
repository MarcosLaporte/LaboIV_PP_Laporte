import { Component } from '@angular/core';
import { Container } from 'src/app/classes/container';
import { Product } from 'src/app/classes/product';
import { DatabaseService } from 'src/app/services/database.service';
import { InputSwal, Loader, ToastError, ToastSuccess } from 'src/environments/environment';
import { SweetAlertResult } from 'sweetalert2';

@Component({
	selector: 'app-load-container',
	templateUrl: './load-container.component.html',
	styleUrls: ['./load-container.component.css']
})
export class LoadContainerComponent {
	existingStockFilter = (prod: Product) => prod.stock > 0;
	chosenCont: Container | undefined;
	chosenProd: Product | undefined;

	constructor(private db: DatabaseService) { }

	chooseCont(container: Container) {
		this.chosenProd = undefined;
		this.chosenCont = container;
	}

	async chooseProd(product: Product) {
		this.chosenProd = product;
		console.log(this.chosenProd);
		

		const amount: SweetAlertResult<string> | undefined =
			await InputSwal.fire({ input: 'number', inputLabel: "How many?" });
			
			if (amount?.value) {
				const amountValue = parseInt(amount?.value);
			if (amountValue > product.stock || amountValue > this.chosenCont!.strgCapacity) {
				ToastError.fire('Invalid amount.');
				this.chosenProd = undefined;
				return;
			}
			Loader.fire();

			await this.db.addDataAutoId('containerLoad', {
				container: this.chosenCont!.id,
				product: this.chosenProd!.code,
				amount: amountValue
			}).then(() => ToastSuccess.fire('Container loaded!'));

			Loader.close();
		}
	}
}
