import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.scss']
})
export class Sample3Component implements OnInit {

  employees : any[] = [
    {
      id: 1,
      name: 'Test1',
      class: 3
    },
    {
      id: 2,
      name : 'Test2',
      class: 4
    },
    {
      id: 3,
      name : 'Test3',
      class: 5
    },
    {
      id: 4,
      name : 'Test4',
      class: 6
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  updateEmployee(){
    this.employees = [
      {
        id: 1,
        name: 'Test1',
        class: 3
      },
      {
        id: 2,
        name : 'Test2',
        class: 4
      },
      {
        id: 3,
        name : 'Test3',
        class: 5
      },
      {
        id: 4,
        name : 'Test6',
        class: 6
      }
    ];
  }

  trackByFn(item: any)  {
    return item.id;
  }

}
