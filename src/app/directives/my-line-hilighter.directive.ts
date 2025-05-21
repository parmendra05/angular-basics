import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyLineHilighter]'
})
export class MyLineHilighterDirective {

  constructor() { }

  @HostBinding("style.backgroundColor")  // HostBindinng will change the properties of Host (HTML Tags)
  bgcolor = "green" // attribute name will be anything

}
