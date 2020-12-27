import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListComponent } from './events-list.component';
import { getTableRows } from './events-list.component.po';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    component.items = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 rows with data', () => {
    component.items = [{
      id: 'a1',
      title: 'First Event',
      description: 'Some event',
      date: new Date()
    }, {
      id: 'a2',
      title: 'Second Event',
      description: 'Some event',
      date: new Date()
    }, {
      id: 'a3',
      title: 'Event 3',
      description: 'Some event',
      date: new Date()
    }];
    fixture.detectChanges();

    const rows: HTMLElement[] = getTableRows(fixture);
    expect(rows.length).toEqual(3);
  });
});
