import { Injectable } from '@angular/core';
import { BackendGetService } from '../BackendGetService';
import { TotalUser } from '../profiles/User';
import { CaleEvent } from './caleEvent';

@Injectable()
export class EventGetService extends BackendGetService<CaleEvent> {
  public url = 'https://thekalecartelwebapi.azurewebsites.net/api/events/';
}
