import { $$, browser, by, element } from 'protractor';

export class EventsPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getCrateEventBtn() {
    return element(by.css('#create-event-btn'));
  }

  getEditEventBtn() {
    return element(by.css('.table tbody tr td .btn-link'));
  }

  getRemoveEventBtn() {
    return $$('.table tbody tr td .btn-link').last();
  }

  getSubmitEventBtn() {
    return element(by.css('#submit'));
  }

  getEventFormInput(formControlName: string) {
    return element(by.css(`#event-form .form-control[formControlName=${formControlName}]`));
  }

  getEventsList() {
    return element(by.css('.table tbody')).all(by.css('tr'));
  }

  getFirstEventInList() {
    return element(by.css('.table tbody tr .event-title'));
  }
}
