import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../types';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  @Input() items: IEvent[] = [];

  @Output() editEvent: EventEmitter<IEvent> = new EventEmitter();
  @Output() removeEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
