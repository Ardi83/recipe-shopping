import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})

export class DropdoownDirective {
  constructor(private refEl: ElementRef, private renderer: Renderer2) {}
  // isOpen = false;

  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  onClick() {
    this.isOpen = !this.isOpen;
  }
}
