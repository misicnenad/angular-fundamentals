import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http"
import {
	EventsListComponent,
	EventThumbnailComponent,
	EventDetailsComponent,
	CreateEventComponent,
	EventService,
	EventListResolver,
	CreateSessionComponent,
	SessionListComponent,
	DurationPipe,
	UpvoteComponent,
	VoterService,
	LocationValidator,
	EventResolver
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
		ModalTriggerDirective,
		LocationValidator,
		UpvoteComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		EventService,
		EventListResolver,
		EventResolver,
		AuthService,
		VoterService,
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
