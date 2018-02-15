import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../Shared Components/recipe/Recipe';
import { RecipeService } from '../recipe.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  public recipe: Observable<Recipe>;
  recipeName: string;
  constructor(private service: RecipeService, activatedRoute: ActivatedRoute) {
    this.recipeName = activatedRoute.snapshot.paramMap.get('name');
  }
  ngOnInit() {
    this.recipe = this.service.GetByName('name/' + this.recipeName);
  }
}
