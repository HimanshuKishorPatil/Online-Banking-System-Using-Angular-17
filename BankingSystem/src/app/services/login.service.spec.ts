import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    

    const login= new LoginService

    const result= login.add(3,2);

    expect(result).toBe(5);

    
    // expect(service).toBeTruthy();
  });
});
