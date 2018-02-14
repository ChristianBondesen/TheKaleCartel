import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

const routers: Routes = [
  { path: '', component: ProfilesComponent },
  { path: ':person', component: ProfileDetailsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routers), SharedModule],
  declarations: [ProfilesComponent, ProfileDetailsComponent],
  providers: []
})
export class ProfilesModule {}
