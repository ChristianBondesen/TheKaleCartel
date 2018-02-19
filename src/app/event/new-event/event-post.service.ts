import { Injectable } from '@angular/core';
import { BackendGetService } from '../../Shared Components/BackendGetService';
import { CaleEventPost } from '../caleEventPost';

@Injectable()
export class EventPostService extends BackendGetService<CaleEventPost> {
    public url = 'https://thekalecartelwebapi.azurewebsites.net/api/KaleEvents';
}
