import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsService } from '../events.service';
import { IEvent } from '../types';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.sass']
})
export class EventFormComponent implements OnInit, OnChanges {
  @Input() formModel: Partial<IEvent>;

  @Input() modalActionType: 'create' | 'edit' = 'create';

  text = 'Create event';
  form: FormGroup;
  submitted = false;

  constructor(private service: EventsService) {
  }

  ngOnChanges() {
    if (this.formModel) {
      this.createForm(this.formModel);
    }

    this.text = this.modalActionType === 'create' ? 'Create event' : 'Edit event';
  }

  ngOnInit() {
    this.resetForm();
  }

  createForm(model: Partial<IEvent>): void {
    this.form = new FormGroup({
      'title': new FormControl(model.title, [Validators.required]),
      'description': new FormControl(model.description),
      'date': new FormControl(model.date, [Validators.required]),
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.modalActionType === 'create') {
      this.createEvent();
    } else {
      this.updateEvent();
    }
  }

  createEvent() {
    this.service
      .createEvent(this.form.getRawValue())
      .then((response: any) => {
        this.resetForm();
      }, (error: any) => {
        this.submitted = false;
      });
  }

  updateEvent() {
    this.service
      .updateEvent({id: this.formModel.id, ...this.form.getRawValue()})
      .then((response: any) => {
        this.resetForm();
      }, (error: any) => {
        this.submitted = false;
      });
  }

  resetForm() {
    this.submitted = false;

    this.createForm({
      title: null,
      description: null,
      date: null
    });
  }
}
