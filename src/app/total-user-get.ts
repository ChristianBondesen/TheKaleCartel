import { Injectable } from '@angular/core';
import { BackendGetService } from './BackendGetService';
import { TotalUser } from './profiles/User';

@Injectable()
export class TotalUserGetService extends BackendGetService<TotalUser> {
  public url: string = 'https://thekalecartelwebapi.azurewebsites.net/api/kaleprofile/';
}
