import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private count =0;

  getCounterValue(){
    return this.count;
  }

  incrementCounterValue(){
     this.count = this.count + 1
  }

}
