import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeprofileEditComponent } from './employeeprofile-edit.component';

describe('EmployeeprofileEditComponent', () => {
  let component: EmployeeprofileEditComponent;
  let fixture: ComponentFixture<EmployeeprofileEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeprofileEditComponent]
    });
    fixture = TestBed.createComponent(EmployeeprofileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
