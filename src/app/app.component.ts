import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './classes/user';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'LaboIV_PP_Laporte';
	isLogged: boolean = false;

	constructor(private router: Router) {
		inject(AuthService).fireUserObs.subscribe(user => {
			this.isLogged = user !== null;
		});
	}

	ngOnInit() {
		this.router.navigateByUrl('home');
	}

}
