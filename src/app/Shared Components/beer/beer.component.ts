import { Component, OnInit, Input } from '@angular/core';
import { Beer } from './Beer';
import { GetBeerService } from './GetBeer.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  @Input() Beer: Beer;

  constructor() {
  }

  ngOnInit() {
  }
}
