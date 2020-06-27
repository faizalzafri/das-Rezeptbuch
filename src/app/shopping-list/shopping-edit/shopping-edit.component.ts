import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAdd(form: NgForm) {
    const name: string = form.value.name;
    const amount: number = form.value.amount;
    const ingredient = new Ingredient(name, amount);
    // this.shoppingService.ingredient.emit(ingredient);
    this.shoppingService.addIngredient(ingredient);
  }
}
