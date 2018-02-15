import { Injectable } from '@angular/core';
import { BackendGetService } from '../../Shared Components/BackendGetService';
import { CaleEvent } from '../caleEvent';

@Injectable()
export class EventPostService extends BackendGetService<CaleEvent> {
    public url = 'https://thekalecartelwebapi.azurewebsites.net/api/KaleEvents';
}
