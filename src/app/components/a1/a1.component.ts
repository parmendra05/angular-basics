import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a1',
  imports: [],
  templateUrl: './a1.component.html',
  styleUrl: './a1.component.css'
})
export class A1Component {

  constructor(public counterService : CounterService){

  }

}
