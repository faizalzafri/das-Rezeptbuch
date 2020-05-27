import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'das-Rezeptbuch';

  enableRecipe = false;
  enableShopping = false;

  onNavigate(feature: string) {
    if (feature === 'recipes'){
      this.enableRecipe = true;
      this.enableShopping = false;
    }
    else if (feature !== 'recipes'){
      this.enableRecipe = false;
      this.enableShopping = true;
    }
  }
}
