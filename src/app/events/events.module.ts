import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventFormComponent } from './event-form/event-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsService } from './events.service';
import { EventsListComponent } from './events-list/events-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsApiService } from './api/events-api.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
  ],
  declarations: [
    EventsComponent,
    EventFormComponent,
    EventsListComponent,
  ],
  providers: [EventsService, EventsApiService]
})
export class EventsModule { }
