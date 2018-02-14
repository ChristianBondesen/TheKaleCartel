import { User } from '../profiles/User';
import { Beer } from '../Shared Components/beer/Beer';

export class CaleEvent {
  host: string;
  beers: Beer[];
  user: User;
}
