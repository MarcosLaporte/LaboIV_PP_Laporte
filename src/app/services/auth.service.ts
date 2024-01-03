import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../classes/user';
import { Auth, User as FireUser, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { DatabaseService } from './database.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	//#region Properties, Subjects and Observables
	public urlRedirect: string = 'login';

	private _loggedUserSub = new BehaviorSubject<User | null>(null);
	public loggedUserObs = this._loggedUserSub.asObservable();
	public get LoggedUser(): User | null {
		return this._loggedUserSub.getValue();
	}
	public set LoggedUser(value: User | null) {
		this._loggedUserSub.next(value);
	}

	private _fireUserSub = new BehaviorSubject<FireUser | null>(null);
	public fireUserObs = this._fireUserSub.asObservable();
	public get FireUser(): FireUser | null {
		return this._fireUserSub.getValue();
	}
	public set FireUser(value: FireUser | null) {
		this._fireUserSub.next(value);
	}
	//#endregion

	constructor(private afAuth: Auth, private db: DatabaseService) { }

	async signIn(email: string, password: string) {
		try {
			await signInWithEmailAndPassword(this.afAuth, email, password);
			this.FireUser = this.afAuth.currentUser;
			await this.db.searchUserByEmail(this.FireUser?.email!)
				.then(async user => {
					this.LoggedUser = user;
					this.urlRedirect = this.LoggedUser.isValid ? 'home' : 'terms-conditions';
				})
		} catch (error: any) {
			if (error.code === 'auth/invalid-login-credentials') {
				throw new Error("Credentials don't match.");
			} else {
				throw error;
			}
		}
	}

	async signUp(user: User) {
		return createUserWithEmailAndPassword(this.afAuth, user.email, user.password)
			.then(async userCredential => {
				const newUser = this.afAuth.currentUser
				this.FireUser = newUser;
				this.LoggedUser = user;
				this.urlRedirect = 'terms-conditions';

				await this.db.addDataAutoId('users', user);

				return userCredential
			})
			.catch(() => this.urlRedirect = 'login');
	}

	updateLogged() {
		
	}

}
