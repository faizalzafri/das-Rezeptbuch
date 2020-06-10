import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('reName') reNameRef: ElementRef;
  @ViewChild('reAmt') reAmtRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAdd() {
    const name: string = this.reNameRef.nativeElement.value;
    const amount: number = this.reAmtRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    // this.shoppingService.ingredient.emit(ingredient);
    this.shoppingService.addIngredient(ingredient);
  }
}
