import { TestBed } from '@angular/core/testing';

import { HelperResolver } from './helper.resolver';

describe('HelperResolver', () => {
  let resolver: HelperResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HelperResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
