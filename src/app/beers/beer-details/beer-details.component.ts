import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetBeerService } from '../../Shared Components/beer/GetBeer.service';
import { Observable } from 'rxjs/Observable';
import { Beer } from '../../Shared Components/beer/Beer';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  BeerId: string;
  Beer: Beer;
  constructor(private activatedRoute: ActivatedRoute, private beerService: GetBeerService) { }

  ngOnInit() {
    this.BeerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.beerService.GetOne('id/' + this.BeerId).subscribe((beer) => {
      this.Beer = beer;
    });
  }

}
