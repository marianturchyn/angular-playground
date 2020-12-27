import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { resolve } from 'url';
import { EventsApiService } from './api/events-api.service';
import { IEvent } from './types';
import * as R from 'ramda';

@Injectable()
export class EventsService {
  data: IEvent[] = [/*{
    id: '1608658819766',
    title: 'First Event',
    description: 'Some event',
    date: new Date()
  }, {
    id: '1608658819755',
    title: 'Second Event',
    description: 'Some event',
    date: new Date()
  }*/];
  $dataUpdates = new Subject();

  constructor(private service: EventsApiService) { }

  createEvent(data: Partial<IEvent>): Promise<IEvent> {
    return new Promise((resolve, reject) => {
      this.service
      .create(data)
      .subscribe((response: IEvent) => {
        this.updateState([response, ...this.data]);

        resolve(response);
      }, (error: any) => {
        console.log(error);
        reject(error);
      });
    });
  }

  updateEvent(data: Partial<IEvent>): Promise<IEvent> {
    return new Promise((resolve, reject) => {
      this.service
      .update(data)
      .subscribe((response: IEvent) => {
        const edittedEventIndex = this.data.findIndex(e => e.id === data.id);
        const state = R.clone(this.data);
        state[edittedEventIndex] = response;

        this.updateState([...state]);

        resolve(response);
      }, (error: any) => {
        console.log(error);
        reject(error);
      });
    });
  }

  removeEvent(id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.service
      .remove(id)
      .subscribe((response: string) => {
        this.updateState([...this.data.filter(e => e.id !== id)]);

        resolve(response);
      }, (error: any) => {
        console.log(error);
        reject(error);
      });
    });
  }

  updateState(data: IEvent[]) {
    this.data = data;
    this.$dataUpdates.next();
  }
}
