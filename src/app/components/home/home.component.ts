import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const gitPath = "https://api.github.com/users/MarcosLaporte";
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	user: string = "";
	id: string = "";
	html: string = "";
	avatar: string = "";

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get(gitPath)
			.subscribe((res: any) => {
				this.user = res.login;
				this.id = res['id'];
				this.html = res['html_url'];
				this.avatar = res['avatar_url'];
			})

	}

}
