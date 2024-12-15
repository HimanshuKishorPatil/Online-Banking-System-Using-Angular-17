import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetBankingComponent } from './net-banking.component';

describe('NetBankingComponent', () => {
  let component: NetBankingComponent;
  let fixture: ComponentFixture<NetBankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetBankingComponent]
    });
    fixture = TestBed.createComponent(NetBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
