import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Paprika Chicken',
      'Straight forward grilled chicken recipe',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1018451.jpg',
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
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F665982.jpg',
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
    return this.recipes.slice()[index];
  }

  sendToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
