import { TestBed } from '@angular/core/testing';

import { PagesBehaviorService } from './pages-behavior.service';

describe('PagesBehaviorService', () => {
  let service: PagesBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
