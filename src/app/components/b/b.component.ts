import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-b',
  imports: [],
  providers:[CounterService],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
constructor(public counterService: CounterService){}
}
