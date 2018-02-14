import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../../Shared Components/recipe/Recipe';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipies: Recipe[];
  public displayedColumns = [
    'Name',
    'Rating',
    'Date',
    'picUrl',
    'Course of Action',
    'Person'
  ];
  public dataSource: MatTableDataSource<Recipe>;

  constructor(private service: RecipeService) {}

  ngOnInit() {
    this.service.GetAll().subscribe((data) => {
      this.recipies = data;
    });
    this.dataSource = new MatTableDataSource(this.recipies);
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
