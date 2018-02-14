import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeatureRoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GetBeerService } from './beer/GetBeer.service';
import { ProfileGetService } from './profile-get.service';
import { TotalUserGetService } from './total-user-get';
import { EventComponent } from './event/event.component';
import { NewEventComponent } from './event/new-event/new-event.component';
import { SharedModule } from './shared.module';
import { EventGetService } from './event/event-get.service';

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
    BrowserAnimationsModule,
    FeatureRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [],
  providers: [GetBeerService, ProfileGetService, TotalUserGetService, EventGetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
