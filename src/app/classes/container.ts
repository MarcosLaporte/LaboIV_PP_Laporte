export class Container {
	id: string;
	code: string;
	color: string;
	company: string;
	strgCapacity: number;

	constructor (code: string, color: string, company: string, strgCapacity: number, id: string = '') {
		this.code = code;
		this.color = color;
		this.company = company;
		this.strgCapacity = strgCapacity;
		this.id = id;
	}
}
