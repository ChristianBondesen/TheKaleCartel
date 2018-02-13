import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailsComponent } from './profiles/profile-details/profile-details.component';
import { ProfileComponent } from './profiles/profile/profile.component';
import { BeerComponent } from './beer/beer.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';
import { FeatureRoutingModule } from './routing.module';
import { NameMaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { GetBeerService } from './beer/GetBeer.service';
import { ProfileGetService } from './profile-get.service';
import { TotalUserGetService } from './total-user-get';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilesComponent,
    ProfileDetailsComponent,
    ProfileComponent,
    BeerComponent,
    RecipeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeatureRoutingModule,
    HttpClientModule,
    NameMaterialModule
  ],
  providers: [GetBeerService, ProfileGetService, TotalUserGetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
