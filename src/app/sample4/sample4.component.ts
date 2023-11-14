import { Component, OnDestroy, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sample4',
  templateUrl: './sample4.component.html',
  styleUrls: ['./sample4.component.scss']
})
export class Sample4Component implements OnInit, OnDestroy {

  subscription: Subscription | undefined;

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.subscription = this.sampleService.getData().subscribe((val) => {
      console.log('sample4 Service', val);
    })
  }

  ngOnDestroy(): void {
    if( this.subscription){
      this.subscription?.unsubscribe()
    }
  }

}
