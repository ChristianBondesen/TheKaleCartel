import { Component, OnInit } from '@angular/core';
import { GetBeerService } from '../../beer/GetBeer.service';
import { Observable } from 'rxjs/Observable';
import { Beer } from '../../beer/Beer';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ProfileGetService } from '../../profile-get.service';
import { TotalUserGetService } from '../../total-user-get';
import { TotalUser } from '../User';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  user: TotalUser;
  person: string;
  constructor(
    private userService: TotalUserGetService,
    activatedRoute: ActivatedRoute
  ) {
    this.person = activatedRoute.snapshot.paramMap.get('person');
  }

  ngOnInit() {
    this.userService.GetByName(this.person).subscribe((data) => {
      this.user = Object.assign({}, data);
    });
  }
}
