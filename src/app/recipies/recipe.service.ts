import { Injectable } from '@angular/core';
import { BackendGetService } from '../Shared Components/BackendGetService';
import { Recipe } from '../Shared Components/recipe/Recipe';

@Injectable()
export class RecipeService extends BackendGetService<Recipe> {
  public url = 'https://thekalecartelwebapi.azurewebsites.net/api/kalerecipe/';
}
