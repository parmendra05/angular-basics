import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employees = [
    {name: "Ramesh" , address : "Bangalore" , salary : 70000 },
    {name: "Ganesh" , address : "Hyderabad" , salary : 55000 },
    {name: "Mahesh" , address : "Delhi" , salary : 45000 },
    {name: "Suresh" , address : "Bangalore" , salary : 40000 }
  ]

  myTableColor = "aqua"

}
