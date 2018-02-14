import { Injectable } from '@angular/core';
import { BackendGetService } from '../Shared Components/BackendGetService';
import { User } from './User';

@Injectable()
export class ProfileGetService extends BackendGetService<User> {
  public url = 'https://thekalecartelwebapi.azurewebsites.net/api/kaleprofile/';
}
