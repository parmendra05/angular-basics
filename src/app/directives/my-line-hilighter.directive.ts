import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyLineHilighter]'
})
export class MyLineHilighterDirective {

  constructor( private element : ElementRef) { }

  @HostBinding("style.backgroundColor")  // HostBindinng will change the properties of Host (HTML Tags)
  bgcolor = "green" // attribute name will be anything

  @HostListener("mouseover") // HostListener used to perform some action with Host (HTML)
  changeFontSize(){
    this.element.nativeElement.style.fontSize ="50px"
    console.log("mouse enter")
  }

  @HostListener("mouseout")
  resetFontSize(){
    this.element.nativeElement.style.fontSize ="30px"
    console.log("mouse Out")
  }

}
