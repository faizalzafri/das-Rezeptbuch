import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }

  private initForm() {

    let recipeName = '';
    let recipeImg = '';
    let recipeDesc = '';
    const ings = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe.ingredients != null) {
        for (const i of recipe.ingredients) {
          ings.push(new FormGroup({
            name: new FormControl(i.name),
            amount: new FormControl(i.amount)
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imgPath: new FormControl(recipeImg),
      desci: new FormControl(recipeDesc),
      ingredients: ings
    });
  }

  onSubmit() {
    console.log(this.recipeForm.value);
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onIngredientAdd() {
    (this.recipeForm.get('ingredients') as FormArray).push(new FormGroup({
      name: new FormControl(),
      amount: new FormControl()
    }));
  }
}
