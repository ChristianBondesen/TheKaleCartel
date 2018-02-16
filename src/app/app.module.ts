import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeatureRoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './event/event.component';
import { NewEventComponent } from './event/new-event/new-event.component';
import { SharedModule } from './shared.module';
import { EventGetService } from './event/event-get.service';
import { GetBeerService } from './Shared Components/beer/GetBeer.service';
import { ProfileGetService } from './profiles/profile-get.service';
import { TotalUserGetService } from './profiles/profile-details/total-user-get';
import { ReactiveFormsModule } from '@angular/forms';
import { EventPostService } from './event/new-event/event-post.service';
import { ProfileExtractionService } from './Shared Components/profile-extraction.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EventComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FeatureRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [],
  providers: [
    GetBeerService,
    ProfileGetService,
    TotalUserGetService,
    EventGetService,
    EventPostService,
    ProfileExtractionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
