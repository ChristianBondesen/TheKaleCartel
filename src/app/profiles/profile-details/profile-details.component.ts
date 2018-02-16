import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { TotalUser } from '../User';
import { TotalUserGetService } from './total-user-get';
import { ProfileExtractionService } from '../../Shared Components/profile-extraction.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  user: TotalUser;
  person: number;
  constructor(
    private userService: TotalUserGetService,
    activatedRoute: ActivatedRoute,
    private ExtractService: ProfileExtractionService
  ) {
    this.person = +activatedRoute.snapshot.paramMap.get('person');
  }

  ngOnInit() {
    this.userService.GetOne(this.person).subscribe((data) => {
      this.user = Object.assign({}, data);
    });
  }


  Validate(i: number): boolean {
    const a = i % 2;
    if (a === 0) {
      return true;
    } else {
      return false;
    }
  }
}
