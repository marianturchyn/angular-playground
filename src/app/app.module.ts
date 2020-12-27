import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventsModule } from './events/events.module';
import { HttpClientModule } from '@angular/common/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    EventsModule,

    BsDatepickerModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
