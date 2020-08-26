import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetalisComponent } from './employeedetalis.component';

describe('EmployeedetalisComponent', () => {
  let component: EmployeedetalisComponent;
  let fixture: ComponentFixture<EmployeedetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
