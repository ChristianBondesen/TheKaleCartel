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
  recipeId: number;
  constructor(private service: RecipeService, activatedRoute: ActivatedRoute) {
    this.recipeId = +activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.recipe = this.service.GetOne(this.recipeId);
  }
}
