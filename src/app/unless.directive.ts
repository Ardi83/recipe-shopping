import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(ingredient: Ingredient) {
    if (ingredient.amount > 8) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
