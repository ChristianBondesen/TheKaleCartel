import { Injectable } from '@angular/core';
import { BackendGetService } from '../../Shared Components/BackendGetService';
import { TotalUser } from '../User';

@Injectable()
export class TotalUserGetService extends BackendGetService<TotalUser> {
  public url: string = 'https://thekalecartelwebapi.azurewebsites.net/api/kaleprofile/';
}
