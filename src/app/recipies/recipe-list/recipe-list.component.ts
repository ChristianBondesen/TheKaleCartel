import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../../Shared Components/recipe/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipies: Observable<Recipe[]>;
  constructor(private service: RecipeService) {}

  ngOnInit() {
    this.recipies = this.service.GetAll();
  }
}
