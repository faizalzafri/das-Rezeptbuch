import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping-list/shopping.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Paprika Chicken',
      'Straight forward grilled chicken recipe',
      'https://images.media-allrecipes.com/userphotos/1018451.jpg',
      [
        new Ingredient(
          '(5 pound) whole chicken',
          1
        ),
        new Ingredient(
          'tablespoons ground paprika',
          3
        )
      ]),
    new Recipe(
      'Italian Chicken Marinade',
      'Delicious way of marinating your chicken',
      'https://images.media-allrecipes.com/userphotos/665982.jpg',
      [
        new Ingredient(
          'boneless chicken breast halves',
          4
        ),
        new Ingredient(
          '(16 ounce) bottle Italian-style salad dressing',
          1
        )
      ])
  ];

  constructor(private shoppingService: ShoppingService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  sendToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
