import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sample5',
  templateUrl: './sample5.component.html',
  styleUrls: ['./sample5.component.scss']
})
export class Sample5Component implements OnInit, OnDestroy {

  subscription: Subscription | undefined;

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.subscription = this.sampleService.getData().subscribe((val) => {
      console.log('sample5 Service', val);
    })
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
