import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RestCountriesService {
	readonly initPath: string = 'https://restcountries.com/v3.1/';
	constructor(private http: HttpClient) { }

	getAll() {
		return this.http.get(this.initPath + 'region/europe');
	}

	getByCode(code: string) {
		return this.http.get(this.initPath + 'alpha/' + code);
	}
}
