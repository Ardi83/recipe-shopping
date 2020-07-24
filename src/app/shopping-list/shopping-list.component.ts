import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}
  ingredients = [];

  ngOnInit() {
    this.ingredients = this.shoppingService.ingredients;
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
