import { Component, Output, EventEmitter } from '@angular/core';
import { Container } from 'src/app/classes/container';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
	selector: 'app-container-list',
	templateUrl: './container-list.component.html',
	styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent {
	@Output() contEv = new EventEmitter<Container>();
	containers: Array<Container> = [];
	sortFunc: (a: Container, b: Container) => number = (a, b) => a.company > b.company ? 1 : -1;

	constructor(private db: DatabaseService) { }

	ngOnInit() {
		this.db.listenColChanges<Container>('containers', this.containers, undefined, this.sortFunc);
	}

	onSelect(container: Container) {
		this.contEv.emit(container);
	}
}
