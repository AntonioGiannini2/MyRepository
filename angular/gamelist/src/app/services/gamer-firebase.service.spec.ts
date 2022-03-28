import { TestBed } from '@angular/core/testing';

import { GamerFirebaseService } from './gamer-firebase.service';

describe('GamerFirebaseService', () => {
  let service: GamerFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamerFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
