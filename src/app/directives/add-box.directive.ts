import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddBox]'
})
export class AddBoxDirective implements OnInit{
  clickTimes = 1;
@HostListener('click')onClick(){

  
}
  constructor(private renderer : Renderer2,private el:ElementRef) { }

  ngOnInit(): void {
  
  }

}
