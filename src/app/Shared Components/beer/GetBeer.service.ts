import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Beer } from './Beer';
import { HttpClient } from '@angular/common/http';
import { BackendGetService } from '../BackendGetService';

@Injectable()
export class GetBeerService extends BackendGetService<Beer> {
  public url = 'https://thekalecartelwebapi.azurewebsites.net/api/kalebeer/';
}
