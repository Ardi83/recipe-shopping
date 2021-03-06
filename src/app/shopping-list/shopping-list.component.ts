import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(private slService: ShoppingListService) {}
  ingredients: Ingredient[] = [];

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanges.subscribe((ingredinets: Ingredient[]) => this.ingredients = ingredinets);
  }

}
