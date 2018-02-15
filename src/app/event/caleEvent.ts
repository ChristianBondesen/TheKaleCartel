import { Beer } from '../Shared Components/beer/Beer';
import { Recipe } from '../Shared Components/recipe/Recipe';

export class CaleEvent {
  kaleProfileName: string; // navn på host
  name: string; // navn på event
  eventDate: Date;
  beers: Beer[];
  recipe: Recipe[];
}
