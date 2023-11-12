import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'LaboIV_PP_Laporte';
	isLogged: boolean = false;
	isAdmin: boolean = false;

	constructor(private router: Router) {
		inject(AuthService).fireUserObs.subscribe(user => {
			this.isLogged = user !== null;
		});
		inject(AuthService).loggedUserObs.subscribe(user => {
			this.isAdmin = !!user && user.role === 'admin';
		});
	}

	ngOnInit() {
		this.router.navigateByUrl('home');
	}

}
