import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { IEvent } from './types';
import { EventsService } from './events.service';

describe('EventsService', () => {
  const startData: IEvent[] = [{
    id: '1608658819766',
    title: 'First Event',
    description: 'Some event',
    date: new Date()
  }, {
    id: '1608658819755',
    title: 'Second Event',
    description: 'Some event',
    date: new Date()
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [EventsService]
    });
  });

  it('should be created', inject([EventsService], (service: EventsService) => {
    expect(service).toBeTruthy();
  }));

  it('should add element on create', inject([EventsService], (service: EventsService) => {
    const newItem: Partial<IEvent> = {
      title: 'New Event',
      description: 'Some event',
      date: new Date()
    };

    service.data = startData;
    service.createEvent(newItem);

    const newItemInState: IEvent = service.data.find(e => e.title === newItem.title);
    expect(newItemInState).toBeDefined();
  }));

  it('should update element\'s title on update title', inject([EventsService], (service: EventsService) => {
    const newItem: Partial<IEvent> = {
      id: '1608658819766',
      title: 'New title',
      description: 'Some event',
      date: new Date()
    };

    service.data = startData;
    service.updateEvent(newItem);

    const newItemInState: IEvent = service.data.find(e => e.title === newItem.title);
    expect(newItemInState).toBeDefined();
  }));

  it('should remove element on remove', inject([EventsService], (service: EventsService) => {
    const item: Partial<IEvent> = {
      id: '1608658819766'
    };

    service.data = startData;
    service.removeEvent(item.id);

    const itemInState: IEvent = service.data.find(e => e.id === item.id);
    expect(itemInState).toBeUndefined();
  }));

  it('updateState should update state', inject([EventsService], (service: EventsService) => {
    service.data = startData;

    service.updateState([]);

    expect(service.data.length === 0).toBeTruthy();
  }));
});
