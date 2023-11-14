import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.scss']
})
export class Sample1Component implements OnInit {
  sampleArr = ['a', 'a','c', 'd', 'e', 'a'];
  sampleInput: string = '';
  testVar = '';
  constructor() { }

  ngOnInit(): void {
  }
  convertToTestUpper(text: string) {
    console.log('convertToTestUpper');
    return 'test: ' + text.toUpperCase(); 
  }

  reverse() {
    this.sampleArr = this.sampleArr.reverse();
  }



}
