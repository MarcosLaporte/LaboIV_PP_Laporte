import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Loader } from 'src/environments/environment';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent {
	user: User;
	constructor (private db: DatabaseService, private auth: AuthService, private router: Router) {
		this.user = auth.LoggedUser!;
	}

	async acceptTerms() {
		Loader.fire();
		this.user.isValid = true;
		await this.db.updateDoc('users', this.user.id, { isValid: true });
		this.auth.LoggedUser = this.user;
		Loader.close();
		this.router.navigateByUrl('home');
	}
}
