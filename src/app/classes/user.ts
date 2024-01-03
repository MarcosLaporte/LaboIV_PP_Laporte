export class User {
	role: 'admin' | 'employee';
	firstName: string;
	lastName: string;
	id: string;
	email: string;
	password: string;
	isValid: boolean;

	constructor(role: 'admin' | 'employee', firstName: string, lastName: string, email: string, password: string, isValid: boolean = false, id: string = '') {
		this.role = role;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.isValid = isValid;
		this.id = id;
	}
}