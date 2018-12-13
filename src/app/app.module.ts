import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
	EventsListComponent,
	EventThumbnailComponent,
	EventDetailsComponent,
	CreateEventComponent,
	EventService,
	EventListResolver,
	EventRouteActivator,
	CreateSessionComponent
} from "./events/index";
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './error/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
		NavBarComponent,
		CreateSessionComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		EventService,
		ToastrService,
		EventListResolver,
		EventRouteActivator,
		AuthService,
		{ provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
	],
	bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
	if (component.isDirty)
		return window.confirm('You have not saved this event, do you really want to cancel?')
	return true
}
