import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTimeoffComponent } from './approve-timeoff.component';

describe('ApproveTimeoffComponent', () => {
  let component: ApproveTimeoffComponent;
  let fixture: ComponentFixture<ApproveTimeoffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveTimeoffComponent]
    });
    fixture = TestBed.createComponent(ApproveTimeoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
