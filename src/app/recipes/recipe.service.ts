import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 1),
      ]),
      new Recipe(
        'Second Test Recipe', 'This is simply second test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Rice', 10),
      ])
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
