import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';

@Component({
	templateUrl: './create-event.component.html',
	styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
	isDirty = true;

	constructor(private router: Router, private eventService: EventService) { }

	saveEvent(formValues) {
		this.eventService.saveEvent(formValues).subscribe(() => {
			this.isDirty = false;
			this.router.navigate(['/events']);
		});
	}

	cancel() {
		this.router.navigate(['/events']);
	}
}
