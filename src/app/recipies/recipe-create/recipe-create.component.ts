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

function dateValidator(from: Date, to: Date) : ValidatorFn {
  return(c: AbstractControl): { [key: string]: boolean } | null => {
      if ( c.value != undefined && (from < c.value && c.value > to )) {
        console.log((c.value) + " Igood shiutes");
        return null;
      }
    return null; //success
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

  private fromDate: Date = new Date('2018, 0, 31');
  private toDate: Date = new Date();
  


  constructor(
    private fb: FormBuilder,
    private profileExtractionService: ProfileExtractionService,
    private bckEndService: RecipeService
  ) {}

  ngOnInit() {
    this.createForm();
    this.recipeForm.get('rating').valueChanges.subscribe((data) => {});
  }

  createForm() {
    
    this.recipeForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      rating: [''],
      creationDate: [null, [Validators.required, dateValidator(this.fromDate, this.toDate)]],
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
}
