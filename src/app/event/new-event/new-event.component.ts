import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import { ProfileExtractionService } from '../../Shared Components/profile-extraction.service';
import { User } from '../../profiles/User';
import { EventPostService } from './event-post.service';
import { ErrorStateMatcher } from '@angular/material';
import { CaleEventPost } from '../caleEventPost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  eventForm: FormGroup;
  caleEvent: CaleEventPost = new CaleEventPost();
  users: User[];
  hostBringsBeerField = true;
  hostId: number;
  matcher = new MyErrorStateMatcher(); // slet evt

  constructor(private fb: FormBuilder,
    public profileServce: ProfileExtractionService,
    private postService: EventPostService) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      // selectionbox
      kaleProfileName: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
      ],
      kaleProfileId: 0,
      eventDate: ['', [Validators.required]],
      name: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ],
      kaleBeers: this.fb.array([this.initBeers()]),
      kaleRecipes: this.fb.array([this.initRecipes()])
    });

  }

  setBeerBringerId(beerBringerName: string, i: number) {
    let beerBringerId: number;
    beerBringerId = this.profileServce.GetIdByName(beerBringerName);
    const control = <FormArray>this.eventForm.controls['kaleBeers'];
    control.at(i).patchValue({
      kaleProfileId: beerBringerId
    });
  }

  setRecipeBringerId(recipeBringerName: string, i: number) {
    let beerBringerId: number;
    beerBringerId = this.profileServce.GetIdByName(recipeBringerName);
    const control = <FormArray>this.eventForm.controls['kaleRecipes'];
    control.at(i).patchValue({
      kaleProfileId: beerBringerId
    });
  }

  hostBringsBeer(v: boolean) {
    if (v) {
      // if (this.hostBringsBeerField) {
      const control = <FormArray>this.eventForm.get('kaleBeers');
      let x = 0;
      while (x < control.length) {
        control.at(x).patchValue({
          kaleProfileId: this.hostId
        });
        x++;
      }


      // slet først kaleprofilename fra array kaleBeers, fordi vi ikke vil validere på den, når det er host der tager bajer med
      const controlBeers = <FormArray>this.eventForm.get('kaleBeers');
      x = 0;
      while (x < controlBeers.length) {
        controlBeers.at(x).get('kaleProfileName').disable();
        x++;
      }

    }

    if (!v) {
      // if (this.hostBringsBeerField) {
      const control = <FormArray>this.eventForm.get('kaleBeers');
      let x = 0;
      while (x < control.length) {
        control.at(x).patchValue({
          kaleProfileId: -1
        });
        x++;
      }

      // Gør kaleprofilename aktivt igen, så vi kan validere på den :3
      const controlBeers = <FormArray>this.eventForm.get('kaleBeers');
      x = 0;
      while (x < controlBeers.length) {
        controlBeers.at(x).get('kaleProfileName').enable();
        x++;
      }
    }

    this.hostBringsBeerField = v;
  }

  setHostId(hostName: string): void {
    this.hostId = this.profileServce.GetIdByName(this.eventForm.get('kaleProfileName').value);
    this.eventForm.patchValue({
      kaleProfileId: this.hostId
    });
  }
  save(): void {
    const controlRecipes = <FormArray>this.eventForm.get('kaleRecipes');
    const controlBeers = <FormArray>this.eventForm.get('kaleBeers');
    // slet først kaleprofilename fra array kalericipes, fordi backenden ikke skal bruge den
    let x = 0;
    while (x < controlRecipes.length) {
      controlRecipes.at(x).get('kaleProfileName').disable();
      x++;
    }
    // slet først kaleprofilename fra array kaleBeers, fordi backenden ikke skal bruge den
    x = 0;
    while (x < controlBeers.length) {
      controlBeers.at(x).get('kaleProfileName').disable();
      x++;
    }
    // send lortet
    this.caleEvent.kaleProfileId = this.eventForm.value.kaleProfileId;
    this.caleEvent.eventDate = this.eventForm.value.eventDate;
    this.caleEvent.name = this.eventForm.value.name;
    this.caleEvent.kaleBeers = this.eventForm.value.kaleBeers;
    this.caleEvent.kaleRecipes = this.eventForm.value.kaleRecipes;

    // the.eventForm.value.copy
    // Object.assign({}, this.eventForm.value);
    // this.eventForm.value;
    this.postService.PostNew(this.caleEvent).subscribe();

    // Tilføj kaleprofilename til array kaleRicipes, så bruger kan indtaste det igen

    // console.log(this.eventForm.value);
    x = 0;
    while (x < controlRecipes.length) {
      controlRecipes.at(x).get('kaleProfileName').enable();
      x++;
    }
    // Tilføj kaleprofilename til array kaleBeers, så bruger kan indtaste det igen
    x = 0;
    while (x < controlBeers.length) {
      controlBeers.at(x).get('kaleProfileName').enable();
      x++;
    }
  }

  initRecipes() {
    return this.fb.group({
      kaleProfileName: ['', Validators.required],
      name: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      kaleProfileId: [-1, [Validators.required, Validators.min(1)]],
      courseOfAction : [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000)
        ]
      ]
    });
  }

  addRecipe(): void {
    const control = <FormArray>this.eventForm.controls['kaleRecipes'];
    control.push(this.initRecipes());
  }

  removeRecipe(i: number): void {
    const control = <FormArray>this.eventForm.controls['kaleRecipes'];
    control.removeAt(i);
  }

  initBeers() {
    return this.fb.group({
      kaleProfileName: ['', Validators.required],
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      kaleProfileId: [-1, [Validators.required, Validators.min(1)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200)
        ]
      ],
      // skal være tal
      volPercentage: ['', [Validators.required, Validators.min(1), Validators.max(99)]]
    });
  }

  addBeer(): void {
    const control = <FormArray>this.eventForm.controls['kaleBeers'];
    control.push(this.initBeers());
  }

  removeBeer(i: number): void {
    const control = <FormArray>this.eventForm.controls['kaleBeers'];
    control.removeAt(i);
  }
}

/** Error when invalid control is invalid AND touched*/
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.touched));
  }
}
