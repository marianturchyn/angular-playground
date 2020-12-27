import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EventsApiService } from './events-api.service';

describe('EventsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: EventsApiService = TestBed.get(EventsApiService);
    expect(service).toBeTruthy();
  });
});
