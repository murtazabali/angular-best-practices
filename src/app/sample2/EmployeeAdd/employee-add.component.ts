import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAdd implements OnInit {

  @Output() add = new EventEmitter();
  employeeName = '';
  constructor() { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.add.emit(this.employeeName);
    this.employeeName = '';
  }

}
