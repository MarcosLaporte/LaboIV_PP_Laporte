import { Component, EventEmitter, Output } from '@angular/core';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
	@Output() countryEv = new EventEmitter<any>();
	paises: Array<any> = [];

	constructor(private countries: RestCountriesService) {}

	ngOnInit(){
		const req = this.countries.getAll();

		req.subscribe((res) => {
			let arrAux = res as Array<any>;
			arrAux.sort((a, b) => a.name.common > b.name.common ? 1 : -1);

			this.paises = arrAux;
		});
	}

	onSelect(country: any) {
		this.countryEv.emit(country);
	}
}
