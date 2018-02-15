import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Shared Components/recipe/Recipe';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ProfileExtractionService } from '../../Shared Components/profile-extraction.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  public recipeForm: FormGroup;
  public selectProfile = ['Christian', 'Michael', 'Osvald', 'Kasper'];

  constructor(
    private fb: FormBuilder,
    private profileExtractionService: ProfileExtractionService,
    private bckEndService: RecipeService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      rating: ['', [Validators.required]],
      creationDate: [null, Validators.required],
      courseOfAction: ['', Validators.required],
      pictureUrl: ['', Validators.required],
      kaleProfileId: [null, Validators.required]
    });
  }

  addRecipe() {
    let recipe = Object.assign({}, this.recipeForm.value);
    recipe.kaleProfileId = this.profileExtractionService.GetIdByName(
      recipe.kaleProfileId
    );

    this.bckEndService.PostNew(recipe).subscribe((data) => {
      console.log(data);
    });
  }
}
