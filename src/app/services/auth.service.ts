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
		let user: User | null = null;
		try {
			await signInWithEmailAndPassword(this.afAuth, email, password);
			user = await this.db.searchUserByEmail(email);

		} catch (error: any) {
			if (error.code === 'auth/invalid-login-credentials') {
				const userId = await this.signUp(email, password);
				user = new User('employee', email, password, userId);
			}
			else throw error;

		} finally {
			this.LoggedUser = user;
			this.FireUser = this.afAuth.currentUser;
		}
	}

	async signUp(email: string, password: string) {
		return createUserWithEmailAndPassword(this.afAuth, email, password)
			.then(() => {
				return this.db.addDataAutoId('users', { email: email, password: password });
			});
	}

}
