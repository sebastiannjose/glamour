import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-event-list',
  providers: [EventService],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Array<any>;

  constructor(eventService: EventService) {
    this.events = eventService.getEvents();
  }

  ngOnInit() {
  }

}
