import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() createdIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: true}) name: ElementRef;
  @ViewChild('amountInput', {static: true}) amount: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.createdIngredient.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }
}
