import { Beer } from '../Shared Components/beer/Beer';
import { Recipe } from '../Shared Components/recipe/Recipe';

export class CaleEvent {
  kaleProfileName: string; // navn på host
  kaleProfileId: number;
  eventDate: Date;
  name: string; // navn på event
  kaleBeers: Beer[];
  kaleRecipes: Recipe[];
}
