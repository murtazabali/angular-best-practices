import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }


  getData() {
    return new Observable((observer) => {
      setInterval(() => {
        const number = Math.floor(Math.random() * 10);
        observer.next(number);
        observer.complete();
      }, 1000);
    })
  }
}
