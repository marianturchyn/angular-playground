import { By } from '@angular/platform-browser';

export function getTableRows(fixture: any): HTMLElement[] {
  return fixture.debugElement.queryAll(By.css('table tbody tr')).map(e => e.nativeElement);
}
