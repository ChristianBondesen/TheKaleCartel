import { Beer } from '../Shared Components/beer/Beer';
import { Recipe } from '../Shared Components/recipe/Recipe';

export class CaleEventPost {
  kaleProfileId: number;
  eventDate: Date;
  name: string; // navn på event
  kaleBeers: Beer[];
  kaleRecipes: Recipe[];
}
