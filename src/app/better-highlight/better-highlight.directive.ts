import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') defaultColor = 'transparent';
  @Input() highlightColor = 'green';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseover() {
    // this.renderer.setStyle(test, 'background-color', 'green');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave')
    mouseleave() {
    // this.renderer.setStyle(test, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
