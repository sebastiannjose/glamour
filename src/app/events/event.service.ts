import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  events: Array<any>;

  constructor() {
    this.events = [
      {title:'Sherlock Holmes'},
      {title:'Thick as Thieves'}
    ];
  }

  getEvents() { return this.events; }

}
