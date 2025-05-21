import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { A1Component } from './components/a1/a1.component';
import { A2Component } from './components/a2/a2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeComponent,A1Component,A2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basics';
}
