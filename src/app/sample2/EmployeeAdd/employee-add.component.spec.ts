import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAdd } from './employee-add.component';

describe('Child1Component', () => {
  let component: EmployeeAdd;
  let fixture: ComponentFixture<EmployeeAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAdd ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
