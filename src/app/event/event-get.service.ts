import { Injectable } from '@angular/core';
import { TotalUser } from '../profiles/User';
import { CaleEvent } from './caleEvent';
import { BackendGetService } from '../Shared Components/BackendGetService';

@Injectable()
export class EventGetService extends BackendGetService<CaleEvent> {
  public url = 'https://thekalecartelwebapi.azurewebsites.net/api/kaleevents/';
}
