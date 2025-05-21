import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyLineHilighterDirective } from '../../directives/my-line-hilighter.directive';
import { CountryCodePipe } from '../../pipes/country-code.pipe';

@Component({
  selector: 'app-employee',
  imports: [CommonModule,MyLineHilighterDirective,CountryCodePipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employees = [
    {name: "rameSH" , address : "Bangalore" , salary : 70000 }, // titleCase Pipe will convert this name into Ramesh
    {name: "GaNesh" , address : "Hyderabad" , salary : 55000 },
    {name: "Mahesh" , address : "Delhi" , salary : 45000 },
    {name: "Suresh" , address : "Bangalore" , salary : 40000 }
  ]

  myTableColor = "aqua"
  mobileNo = 7777888999

}
