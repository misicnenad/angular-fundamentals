import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
	EventsListComponent,
	EventThumbnailComponent,
	EventDetailsComponent,
	CreateEventComponent,
	EventService,
	EventListResolver,
	EventRouteActivator,
	CreateSessionComponent,
	SessionListComponent,
	DurationPipe
} from "./events/index"
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { routes } from './routes'
import { TOASTR_TOKEN, JQ_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index'
import { Error404Component } from './error/404.component'
import { AuthService } from './user/auth.service'

let toastr: Toastr = window['toastr']
let jQuery = window['$']

@NgModule({
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
		NavBarComponent,
		CreateSessionComponent,
		SessionListComponent,
		CollapsibleWellComponent,
		DurationPipe,
		SimpleModalComponent,
		ModalTriggerDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		EventService,
		EventListResolver,
		EventRouteActivator,
		AuthService,
		{ provide: TOASTR_TOKEN, useValue: toastr },
		{ provide: JQ_TOKEN, useValue: jQuery },
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
