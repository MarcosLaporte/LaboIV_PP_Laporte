import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AdmContainerComponent } from './components/container/adm-container/adm-container.component';
import { AddContainerComponent } from './components/container/add-container/add-container.component';
import { DeleteContainerComponent } from './components/container/delete-container/delete-container.component';
import { ModifyContainerComponent } from './components/container/modify-container/modify-container.component';
import { ContainerListComponent } from './components/container/container-list/container-list.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		AdmContainerComponent,
		AddContainerComponent,
		DeleteContainerComponent,
		ModifyContainerComponent,
		ContainerListComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideStorage(() => getStorage()),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
