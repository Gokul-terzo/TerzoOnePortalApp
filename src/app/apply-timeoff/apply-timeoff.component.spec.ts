import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTimeoffComponent } from './apply-timeoff.component';

describe('ApplyTimeoffComponent', () => {
  let component: ApplyTimeoffComponent;
  let fixture: ComponentFixture<ApplyTimeoffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyTimeoffComponent]
    });
    fixture = TestBed.createComponent(ApplyTimeoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
