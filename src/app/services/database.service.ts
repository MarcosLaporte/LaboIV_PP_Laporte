import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { User } from '../classes/user';
import { QuerySnapshot, onSnapshot, query } from 'firebase/firestore';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {
	constructor(private firestore: Firestore) { }

	async getData<T>(colPath: string): Promise<Array<T>> {
		const col = collection(this.firestore, colPath);

		const querySnapshot = await getDocs(col);
		const arrAux: Array<T> = [];

		querySnapshot.forEach((doc) => {
			arrAux.push(doc.data() as T);
		});

		return arrAux;
	}

	async addData(colPath: string, data: any) {
		const col = collection(this.firestore, colPath);
		await addDoc(col, { ...data });
	}

	async addDataAutoId(colPath: string, data: any): Promise<string> {
		const col = collection(this.firestore, colPath);
		const newDoc = doc(col);
		data.id = newDoc.id;

		try {
			await setDoc(newDoc, { ...data });
		} catch (error) {
			deleteDoc(newDoc);
			throw new Error('There was a problem while uploading.', { cause: error });
		}

		return data.id;
	}

	updateDoc(dbPath: string, docId: string, data: any) {
		const docRef = doc(this.firestore, dbPath, docId);

		return updateDoc(docRef, { ...data });
	}

	deleteDoc(dbPath: string, docId: string) {
		const docRef = doc(this.firestore, dbPath, docId);

		return deleteDoc(docRef);
	}

	async searchUserByEmail(email: string): Promise<User> {
		const arrayUsers = await this.getData<User>('users');
		const index = arrayUsers.findIndex(u => u.email === email);
		if (index === -1) throw new Error('This email address is not registered.');

		return arrayUsers[index];
	}

	listenColChanges<T extends { id: string }>(colPath: string, arrayPointer: Array<T>, filterFunc?: (item: T) => boolean, sortFunc?: (a: any, b: any) => number, transform?: (item: T) => Promise<T>) {
		const col = collection(this.firestore, colPath);
		const q = query(col);

		onSnapshot(q, async (addSnap: QuerySnapshot) => {
			for (const change of addSnap.docChanges()) {
				const data = change.doc.data();
				const newData = transform ? await transform(data as T) : data as T;
				if (!filterFunc || filterFunc(newData)) {
					console.log(newData);
					if (change.type === 'added') {
						arrayPointer.push(newData);
					} else {
						const index = arrayPointer.findIndex(t => t.id === newData.id);
						if (change.type === 'modified')
							arrayPointer[index] = newData;
						else
							arrayPointer.splice(index, 1);
					}
				}
			}

			if (sortFunc)
				arrayPointer.sort(sortFunc);
		});
	}
}
