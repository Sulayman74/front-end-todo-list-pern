import { TestBed } from '@angular/core/testing';

import { HeadersAuthInterceptor } from './headers-auth.interceptor';

describe('HeadersAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeadersAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeadersAuthInterceptor = TestBed.inject(HeadersAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
