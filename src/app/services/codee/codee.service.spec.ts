import { TestBed } from '@angular/core/testing';

import { CodeeService } from './codee.service';

describe('CodeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeeService = TestBed.get(CodeeService);
    expect(service).toBeTruthy();
  });
});
