import { Component, OnInit } from '@angular/core';
import { Beer } from '../../Shared Components/beer/Beer';
import { Observable } from 'rxjs/Observable';
import { GetBeerService } from '../../Shared Components/beer/GetBeer.service';
import { Parameters } from '../../Shared Components/BackendGetService';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerPageComponent implements OnInit {
  beers: Observable<Beer[]>;
  constructor(private beerService: GetBeerService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.beers = this.route.queryParamMap.switchMap((params: ParamMap) => {
      const c: Parameters[] = [
        { param: 'PageSize', value: params.get('PageSize') },
        { param: 'PageNumber', value: params.get('PageNumber') }
      ];

      return this.beerService.GetWithParams(c);
    });

  }



}
