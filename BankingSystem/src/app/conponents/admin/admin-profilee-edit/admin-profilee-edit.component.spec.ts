import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileeEditComponent } from './admin-profilee-edit.component';

describe('AdminProfileeEditComponent', () => {
  let component: AdminProfileeEditComponent;
  let fixture: ComponentFixture<AdminProfileeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProfileeEditComponent]
    });
    fixture = TestBed.createComponent(AdminProfileeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
