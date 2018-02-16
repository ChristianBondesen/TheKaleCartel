import { Injectable } from '@angular/core';
import { TotalUser } from '../profiles/User';
import { BackendGetService } from '../Shared Components/BackendGetService';
import { CaleEventGet } from './caleEventGet';

@Injectable()
export class EventGetService extends BackendGetService<CaleEventGet> {
  public url = 'https://thekalecartelwebapi.azurewebsites.net/api/kaleevents/';
}
