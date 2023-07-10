import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDriectoryComponent } from './employee-driectory.component';

describe('EmployeeDriectoryComponent', () => {
  let component: EmployeeDriectoryComponent;
  let fixture: ComponentFixture<EmployeeDriectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDriectoryComponent]
    });
    fixture = TestBed.createComponent(EmployeeDriectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
