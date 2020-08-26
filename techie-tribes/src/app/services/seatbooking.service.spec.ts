import { TestBed } from '@angular/core/testing';

import { SeatbookingService } from './seatbooking.service';

describe('SeatbookingService', () => {
  let service: SeatbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
