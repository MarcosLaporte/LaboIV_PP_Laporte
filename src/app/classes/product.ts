export class Product {
	code: string;
	desc: string;
	price: number;
	stock: number;
	countryFrom: Country;
	edible: boolean;

	constructor(code: string, desc: string, price: number, stock: number, countryFrom: Country, edible: boolean) {
		this.code = code;
		this.desc = desc;
		this.price = price;
		this.stock = stock;
		this.countryFrom = countryFrom;
		this.edible = edible;
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
