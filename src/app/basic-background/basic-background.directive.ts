import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[basicBackground]',
})

export class BasicHighlightDirective implements OnInit {
  constructor(public element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.style = `
      background-color: red;
      color: white
    `;
  }
}
