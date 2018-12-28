import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { DECLARATIONS, IMPORTS, PROVIDERS } from './imports';

@NgModule({
	declarations: [
		...DECLARATIONS
	],
	imports: [
		...IMPORTS
	],
	providers: [
		...PROVIDERS
	],
	bootstrap: [EventsAppComponent]
})
export class AppModule { }
