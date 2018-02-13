import { Beer } from '../../beer/Beer';
import { Recipe } from '../../recipe/Recipe';

export class User {
  Description: string;
  Name: string;
  CaleRating: string;
  PicUrl: string;
}

export class TotalUser extends User {
  beers: Beer[];
  recipies: Recipe[];
}
