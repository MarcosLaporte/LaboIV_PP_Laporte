import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loader, ToastError } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	loginForm: FormGroup;

	constructor(private router: Router, private auth: AuthService, private fb: FormBuilder) {
		this.loginForm = fb.group({
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
			]
		});
	}

	async signIn() {
		const email = this.loginForm.get('email')?.value;
		const password = this.loginForm.get('password')?.value;

		try {
			Loader.fire();
			await this.auth.signIn(email, password);
			Loader.close();
			
			this.router.navigateByUrl('home')
		} catch (error: any) {
			ToastError.fire('Oops...', error.message);
		}
	}

	async quickFill() {
		this.loginForm.patchValue({
			email: "marcoslaporte2015@gmail.com",
			password: "UTNFRA"
		})

		this.signIn();
	}
}
