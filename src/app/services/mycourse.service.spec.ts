import { TestBed } from '@angular/core/testing';

import { MycourseService } from './mycourse.service';

describe('MycourseService', () => {
  let service: MycourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
