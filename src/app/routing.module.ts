import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { NotFoundComponent } from './not-found.component';
import { ProfileDetailsComponent } from './profiles/profile-details/profile-details.component';
import { EventComponent } from './event/event.component';
import { BeerComponent } from './Shared Components/beer/beer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'event', component: EventComponent },
  {
    path: 'profiles',
    loadChildren: 'app/profiles/profiles.module#ProfilesModule'
  },
  {
    path: 'recipies',
    loadChildren: 'app/recipies/recipies.module#RecipiesModule'
  },
  {
    path: 'beer/:id', component: BeerComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, NotFoundComponent]
})
export class FeatureRoutingModule {}
