import { Directive, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicBackground]',
})

export class BasicHighlightDirective implements OnInit {
  constructor(public element: ElementRef) {}

  @HostBinding('style.background') background: string;

  @HostListener('mouseenter')
  mouseover() {
    this.background = 'lightGrey';
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.background = 'white';
  }
  ngOnInit() {
    this.element.nativeElement.style = `
      background-color: white;
      color: grey;
      `;
    }

}
