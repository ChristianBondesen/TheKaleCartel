import { Component, OnInit } from '@angular/core';
import { ProfileGetService } from '../profile-get.service';
import { Observable } from 'rxjs/Observable';
import { User } from './User';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  profiles: Observable<User[]>;
  constructor(private profileGet: ProfileGetService) {}

  ngOnInit() {
    this.profiles = this.profileGet.GetAll();
  }
}
