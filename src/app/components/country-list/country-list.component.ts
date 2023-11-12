import { Component, EventEmitter, Output } from '@angular/core';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
	@Output() countryEv = new EventEmitter<any>();
	countries: Array<any> = [];

	constructor(private countryServ: RestCountriesService) {}

	ngOnInit(){
		const req = this.countryServ.getAll();

		req.subscribe((res) => {
			let arrAux = res as Array<any>;
			arrAux.sort((a, b) => a.name.common > b.name.common ? 1 : -1);

			this.countries = arrAux;
		});
	}

	onSelect(country: any) {
		this.countryEv.emit(country);
	}
}
