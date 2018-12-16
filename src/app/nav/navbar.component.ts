import { Component, OnInit } from "@angular/core"
import { AuthService } from "../user/auth.service"
import { ISession, EventService, IEvent } from "../events"

@Component({
	selector: 'nav-bar',
	templateUrl: './nav-bar.component.html',
	styles: [`
		.nav.navbar-nav { font-size: 15px }
		#searchForm { margin-right: 100px }
		@media (max-width: 1200px) { #searchForm { display: none } }
		li > a.active { color: #f97924 }
	`]
})
export class NavBarComponent implements OnInit {

	searchTerm: string = ''
	events: IEvent[]
	foundSessions: ISession[]

	constructor(private auth: AuthService, private eventService: EventService) { }

	ngOnInit() {
		this.eventService.getEvents().subscribe(data => this.events = data)
	}

	searchSessions(searchTerm) {
		this.eventService.searchSessions(searchTerm).subscribe(sessions => {
			this.foundSessions = sessions
		})
	}
}