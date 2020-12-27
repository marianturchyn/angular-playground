import { EventsPage } from './events.po';
import { browser, logging } from 'protractor';

describe('Events Page', () => {
  browser.get(browser.baseUrl + 'events');

  let page: EventsPage;
  const newEvent = {
    id: '1608658819766',
    title: 'First Event',
    description: 'Some event',
    date: '12/06/2020'
  };
  let createEvent;

  beforeEach(() => {
    page = new EventsPage();
    page.navigateTo();
  });

  it('should create new Event', async () => {
    page.navigateTo();

    const eventsListLength = await page.getEventsList().count();

    // action
    await createEvent();

    // expect
    const newEventsListLength = await page.getEventsList().count();
    expect(newEventsListLength).toEqual(eventsListLength + 1);
  });

  it('should update Event', async () => {
    page.navigateTo();

    const editBtn = page.getEditEventBtn();
    const titleInput = page.getEventFormInput('title');
    const submitEventBtn = page.getSubmitEventBtn();

    // action
    await createEvent();

    editBtn.click();
    titleInput.clear();
    titleInput.sendKeys('New Event Title');
    submitEventBtn.click();
    await browser.sleep(1000);

    // expect
    const updatedEventTitle = page.getFirstEventInList().getText();
    expect(updatedEventTitle).toEqual('New Event Title');
  });

  it('should remove Event', async () => {
    page.navigateTo();

    const removeBtn = page.getRemoveEventBtn();

    // action
    await createEvent();
    removeBtn.click();
    await browser.sleep(1000);

    // expect
    const newEventsListLength = await page.getEventsList().count();
    expect(newEventsListLength).toEqual(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  createEvent = async() => {
    const createBtn = page.getCrateEventBtn();
    const submitEventBtn = page.getSubmitEventBtn();

    const titleInput = page.getEventFormInput('title');
    const descriptionInput = page.getEventFormInput('description');
    const dateInput = page.getEventFormInput('date');

    // action
    createBtn.click();

    dateInput.sendKeys(newEvent.date);
    descriptionInput.sendKeys(newEvent.description);
    titleInput.sendKeys(newEvent.title);

    submitEventBtn.click();
    await browser.sleep(1000);
  }
});
