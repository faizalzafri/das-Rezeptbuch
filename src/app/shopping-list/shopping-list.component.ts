import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from './shopping.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private ingChangeSub: Subscription;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();

    this.ingChangeSub = this.shoppingService.ingredient.subscribe(
      (ing: Ingredient[]) => {
        this.ingredients = ing;
      }
    );
  }

  ngOnDestroy(): void {
    this.ingChangeSub.unsubscribe();
  }

  onEditItem(i: number) {
    this.shoppingService.startedEditing.next(i);
  }
}
