import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeService } from './recipe.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: ':id', component: RecipeDetailsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [RecipeDetailsComponent, RecipeListComponent],
  providers: [RecipeService]
})
export class RecipiesModule {}
