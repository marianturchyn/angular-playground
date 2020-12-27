import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsService } from '../events.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { EventFormComponent } from './event-form.component';
import { getSubmitButton, getTitle } from './event-form.component.po';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventsApiService } from '../api/events-api.service';
import { EventsApiServiceFake } from '../api/events-api.service.fake';

describe('EventFormComponent', () => {
  let fixture: ComponentFixture<EventFormComponent>;
  let component: EventFormComponent;
  let formElement: HTMLElement;

  const formCreateTitle = 'Create event';
  const formEditTitle = 'Edit event';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [EventFormComponent],
      providers: [
        EventsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormComponent);
    component = fixture.componentInstance;
    formElement = fixture.debugElement.query(By.css('form')).nativeElement;

    fixture.detectChanges();
  });

  // basic
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('have create title', () => {
    component.modalActionType = 'create';

    component.ngOnChanges();
    fixture.detectChanges();

    expect(getTitle(fixture).innerText).toEqual(formCreateTitle);
  });

  it('have edit title', () => {
    component.modalActionType = 'edit';

    component.ngOnChanges();
    fixture.detectChanges();

    expect(getTitle(fixture).innerText).toEqual(formEditTitle);
  });

  // form - logic
  it(`form should be invalid for empty values`, async(() => {
    component.createForm({
      title: null,
      description: null,
      date: null
    });

    expect(component.form.valid).toBeFalsy();
  }));

  it(`form should be valid for passed values`, async(() => {
    component.createForm({
      title: 'Title 1',
      description: 'Description 1',
      date: new Date()
    });

    expect(component.form.valid).toBeTruthy();
  }));

  it(`should reset form`, async(() => {
    component.createForm({
      title: 'Title 1',
      description: 'Description 1',
      date: new Date()
    });

    component.resetForm();
    fixture.detectChanges();

    const areControlsEmpty: boolean = !component.form.controls['title'].value &&
                                      !component.form.controls['description'].value &&
                                      !component.form.controls['date'].value;
    expect(areControlsEmpty).toBeTruthy();
  }));

  // form - html
  it(`should set submitted to true`, async(() => {
    component.createForm({
      title: 'Title 1',
      description: 'Description 1',
      date: new Date()
    });
    fixture.detectChanges();

    component.onSubmit();

    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method on btn click`, async(() => {
    spyOn(component, 'onSubmit');
    const submitBtn = getSubmitButton(fixture);

    component.createForm({
      title: 'Title 1',
      description: 'Description 1',
      date: new Date()
    });
    fixture.detectChanges();

    submitBtn.click();

    expect(component.onSubmit).toHaveBeenCalled();
  }));
});
