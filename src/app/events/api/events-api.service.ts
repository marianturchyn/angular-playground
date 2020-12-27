import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEvent } from '../types';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private http: HttpClient) { }

  create(data): Observable<IEvent> {
    return of({
      id: '' + Date.now(),
      title: data.title,
      description: data.description,
      date: data.date
    }) as Observable<IEvent>;
  }

  update(data): Observable<IEvent> {
    return of(data) as Observable<IEvent>;
  }

  remove(id: string): Observable<string> {
    return of(id);
  }
}
