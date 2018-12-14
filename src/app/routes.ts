import { Routes } from "@angular/router"
import { Error404Component } from "./error/404.component"
import { CreateEventComponent, EventsListComponent, EventDetailsComponent, EventListResolver, CreateSessionComponent, EventResolver } from "./events/index";

export const routes: Routes = [
	{ path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
	{ path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
	{ path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
	{ path: 'events/session/new', component: CreateSessionComponent },
	{ path: '404', component: Error404Component },
	{ path: '', redirectTo: '/events', pathMatch: 'full' },
	{ path: 'user', loadChildren: './user/user.module#UserModule' }
]