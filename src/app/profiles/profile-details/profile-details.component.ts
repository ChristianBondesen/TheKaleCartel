import { Component, OnInit } from '@angular/core';
import { GetBeerService } from '../../beer/GetBeer.service';
import { Observable } from 'rxjs/Observable';
import { Beer } from '../../beer/Beer';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { TotalUser } from '../profile/User';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  TotalUser: any;
  user: TotalUser;
  person: string;
  constructor(
    private beerService: GetBeerService,
    activatedRoute: ActivatedRoute
  ) {
    this.person = activatedRoute.snapshot.paramMap.get('person');
  }

  ngOnInit() {
    console.log(this.person);
  }
}
