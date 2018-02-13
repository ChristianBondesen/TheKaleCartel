import { Beer } from '../../beer/Beer';
import { Recipe } from '../../recipe/Recipe';

export class User {
  description: string;
  name: string;
  totaleKaleLevel: string;
  pictureUrl: string;
  nickname: string;
}

export class TotalUser extends User {
  kaleBeers: Beer[];
  kaleRecipes: Recipe[];
}
