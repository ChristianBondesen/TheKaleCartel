import { TestBed, inject } from '@angular/core/testing';

import { ProfileGetService } from './profile-get.service';

describe('ProfileGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileGetService]
    });
  });

  it('should be created', inject([ProfileGetService], (service: ProfileGetService) => {
    expect(service).toBeTruthy();
  }));
});
