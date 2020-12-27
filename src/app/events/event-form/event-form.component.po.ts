import { By } from '@angular/platform-browser';

export function getTitle(fixture: any): HTMLElement {
  return fixture.debugElement.query(By.css('#event-form-title')).nativeElement;
}

export function getSubmitButton(fixture: any): HTMLElement {
  return fixture.debugElement.query(By.css('#submit')).nativeElement;
}
