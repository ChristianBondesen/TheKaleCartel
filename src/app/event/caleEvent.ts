import { Beer } from '../beer/Beer';
import { User } from '../profiles/User';

export class CaleEvent {
  host: string;
  beers: Beer[];
  user: User;
}
