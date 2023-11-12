import { Component, Input, SimpleChange } from '@angular/core';
import { Country } from 'src/app/classes/product';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent {
	@Input() chosenCountry: Country | undefined;
	countryInfo: { [key: string]: string } = {};

	constructor(private countryServ: RestCountriesService) { }

	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		if (changes['chosenCountry']) {
			this.getInfoPais();
		}
	}

	getInfoPais() {
		if (this.chosenCountry) {
			const req = this.countryServ.getByCode(this.chosenCountry.code);

			req.subscribe((res) => {
				const country = (res as Array<any>)[0];
				this.countryInfo['name'] = country.name.common;
				this.countryInfo['cca3'] = country.cca3;
				this.countryInfo['capital'] = country.capital[0];
				this.countryInfo['subregion'] = country.subregion;
				this.countryInfo['flag'] = country.flags.svg;
			});

		}
	}
}
