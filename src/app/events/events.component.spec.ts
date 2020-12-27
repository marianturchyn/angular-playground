import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsApiService } from './api/events-api.service';
import { EventsApiServiceFake } from './api/events-api.service.fake';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsListComponent } from './events-list/events-list.component';

import { EventsComponent } from './events.component';
import { EventsService } from './events.service';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [ EventsComponent, EventFormComponent, EventsListComponent ],
      providers: [
        EventsService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
