import { TestBed } from '@angular/core/testing';

import { NetBankingService } from './net-banking.service';

describe('NetBankingService', () => {
  let service: NetBankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetBankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
