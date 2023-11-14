import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.scss'],
})
export class Sample2Component implements OnInit {

  employees : string[] = ['murtaza', 'mehdi'];
  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(event: string) {
    this.employees = [
      ...this.employees,
      event
    ]
  }

}
