import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Shared Components/recipe/Recipe';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';
import { ProfileExtractionService } from '../../Shared Components/profile-extraction.service';
import { RecipeService } from '../recipe.service';



function rangeValidator(min: number, max: number) : ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value != undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      if(c.pristine) {
        return null;
      }
      return { range: true };
    }
    return null; // validation success
  } 
}



@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  public recipeForm: FormGroup;
  public selectProfile = ['Christian', 'Michael', 'Osvald', 'Kasper'];

  public ratingMessage: string;

  private validationMessages = {
    required: 'Please enter valid rating, 1 - 5'
  };

  constructor(
    private fb: FormBuilder,
    private profileExtractionService: ProfileExtractionService,
    private bckEndService: RecipeService
  ) {}

  ngOnInit() {
    this.createForm();
    this.recipeForm.get('rating').valueChanges.subscribe((data) => {});

    // const ratingControl = this.recipeForm.get('rating');
    // ratingControl.valueChanges.subscribe((value) => {
    //   this.setMessage(ratingControl);
    // });
  }

  createForm() {
    this.recipeForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      rating: [''],
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
    this.bckEndService.PostNew(recipe).subscribe(() => {
      console.log('added recipe');
    });
  }

  // setMessage(c: AbstractControl) {
  //     this.ratingMessage = '';
  //     if ((c.touched || c.dirty) && c.hasError {
  //         this.ratingMessage = Object.keys(c.errors).map(key => )
  //     }
  //   }
}
