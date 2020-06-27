import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  private startedEditingSub: Subscription;
  private editMode = false;
  private editedItemIndex: number;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.startedEditingSub = this.shoppingService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        console.log(this.editedItemIndex);
      });
  }

  onAdd(form: NgForm) {
    const name: string = form.value.name;
    const amount: number = form.value.amount;
    const ingredient = new Ingredient(name, amount);
    // this.shoppingService.ingredient.emit(ingredient);
    this.shoppingService.addIngredient(ingredient);
  }

  ngOnDestroy(): void {
    this.startedEditingSub.unsubscribe();
  }
}
