import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { IEvent } from './types';
import * as R from 'ramda';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {
  events: IEvent[] = [];
  currentlyEditedEvent: IEvent;
  modalActionType: string = 'create';

  constructor(private service: EventsService) { }

  ngOnInit() {
    this.events = this.service.data;

    this.service.$dataUpdates.subscribe(() => {
      this.events = this.service.data;
    });
  }

  removeEvent(id: string) {
    this.service.removeEvent(id);
  }

  editEvent(event: IEvent) {
    this.modalActionType = 'edit';
    this.currentlyEditedEvent = R.clone(event);
  }

  createEvent() {
    this.modalActionType = 'create';
    this.currentlyEditedEvent = R.clone({
      title: null,
      descroption: null,
      date: null
    });
  }
}
