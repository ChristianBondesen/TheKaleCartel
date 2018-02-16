import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRoutingModule } from './beer-routing.module';

import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerPageComponent } from './beer/beer.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  { path: '', component: BeerPageComponent },
  { path: ':id', component: BeerDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BeerRoutingModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [BeerPageComponent, BeerDetailsComponent]
})
export class BeerModule { }
