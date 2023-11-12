export class Product {
	id: string;
	code: string;
	desc: string;
	price: number;
	stock: number;
	countryFrom: Country;
	edible: boolean;

	constructor(code: string, desc: string, price: number, stock: number, countryFrom: Country, edible: boolean, id: string = '') {
		this.code = code;
		this.desc = desc;
		this.price = price;
		this.stock = stock;
		this.countryFrom = countryFrom;
		this.edible = edible;
		this.id = id;
	}
}

export class Country {
	code: string;
	name: string;

	constructor (code: string, name: string) {
		this.code = code;
		this.name = name;
	}
}
