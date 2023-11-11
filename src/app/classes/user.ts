export class User {
	role: 'admin' | 'employee';
	id: string;
	email: string;
	password: string;

	constructor(role: 'admin' | 'employee', email: string, password: string, id: string = '') {
		this.role = role;
		this.email = email;
		this.password = password;
		this.id = id;
	}
}