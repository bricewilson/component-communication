import { TestBed } from '@angular/core/testing';

import { ReaderLibraryService } from './reader-library.service';

describe('ReaderLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReaderLibraryService = TestBed.get(ReaderLibraryService);
    expect(service).toBeTruthy();
  });
});
