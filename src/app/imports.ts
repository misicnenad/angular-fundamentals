import { EventsAppComponent } from "./events-app.component";

import { EventsListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, CreateSessionComponent, SessionListComponent, DurationPipe, LocationValidator, UpvoteComponent, EventService, EventListResolver, EventResolver, VoterService } from "./events";

import { Error404Component } from "./error/404.component";

import { NavBarComponent } from "./nav/navbar.component";

import { CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective, TOASTR_TOKEN, JQ_TOKEN, Toastr } from "./common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { AuthService } from "./user/auth.service";

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

export const DECLARATIONS = [
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
    UpvoteComponent,
    SimpleModalComponent,
    DurationPipe,
    ModalTriggerDirective,
    LocationValidator
];

export const IMPORTS = [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
];

export const PROVIDERS = [
    EventService,
    EventListResolver,
    EventResolver,
    AuthService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
];

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}