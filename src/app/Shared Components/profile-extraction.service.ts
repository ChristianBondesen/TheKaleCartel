import { Injectable } from '@angular/core';
import { ProfileGetService } from '../profiles/profile-get.service';
import { User } from '../profiles/User';

@Injectable()
export class ProfileExtractionService {
  public users: User[];
  constructor(private user: ProfileGetService) {
    this.user.GetAll().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }

  GetIdByName(name: string): number {
    const donger = name.toLocaleLowerCase();
    const profile = this.users.find(
      (p) => p.name.toLocaleLowerCase() === donger
    );
    if (profile) {
      return profile.kaleProfileId;
    }
    return -1;
  }

  GetNameById(id: number): string {
    const profile = this.users.find((p) => p.kaleProfileId === id);

    if (profile) {
      return profile.name;
    }
    return '';
  }
}
