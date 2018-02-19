import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeService } from './recipe.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SharedModule } from '../shared.module';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'details/:id', component: RecipeDetailsComponent },
  { path: 'create', component: RecipeCreateComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeCreateComponent
  ],
  providers: [RecipeService]
})
export class RecipiesModule {}
