import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a2',
  imports: [],
  templateUrl: './a2.component.html',
  styleUrl: './a2.component.css'
})
export class A2Component {
constructor(public counterService: CounterService){}
}
