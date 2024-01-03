import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { Loader, ToastError } from 'src/environments/environment';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	signUpForm: FormGroup;

	constructor(private router: Router, private auth: AuthService, private fb: FormBuilder) {
		this.signUpForm = fb.group({
			firstName: [
				'',
				[
					Validators.required,
					Validators.pattern(/[\p{L}\p{M}]+/u),
				]
			],
			lastName: [
				'',
				[
					Validators.required,
					Validators.pattern(/[\p{L}\p{M}]+/u),
				]
			],
			email: [
				'',
				[
					Validators.required,
					Validators.email,
				]
			],
			password: [
				'',
				[
					Validators.required,
				]
			],
			passCheck: [
				'',
				[
					Validators.required,
					this.passwordMatchValidator
				]
			],
		});
	}

	private passwordMatchValidator(control: AbstractControl): null | object {
		const password = <string>control.parent?.value.password;
		const passCheck = <string>control.value;

		if (password !== passCheck)
			return { passwordMismatch: true };

		return null;
	}

	async signUp() {
		const firstName: string = this.signUpForm.get('firstName')?.value;
		const lastName: string = this.signUpForm.get('lastName')?.value;
		const email: string = this.signUpForm.get('email')?.value;
		const password: string = this.signUpForm.get('password')?.value;

		const user = new User('employee', firstName, lastName, email, password, false);
		try {
			Loader.fire();
			await this.auth.signUp(user);
			Loader.close();

			this.router.navigateByUrl(this.auth.urlRedirect);
		} catch (error: any) {
			ToastError.fire('Oops...', error.message);
		}
	}
}
