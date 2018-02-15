import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';
import { CaleEvent } from '../caleEvent';
import { ProfileExtractionService } from '../../Shared Components/profile-extraction.service';
import { User } from '../../profiles/User';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  eventForm: FormGroup;
  caleEvent: CaleEvent = new CaleEvent();
  users: User[];
  hostBringsBeerField = true;
  hostId: number;

  constructor(private fb: FormBuilder, public profileServce: ProfileExtractionService) {}

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
    // this.eventForm.get('kaleBeers').
  }

  hostBringsBeer(v: boolean) {
    this.hostBringsBeerField = v;
  }

  setHostId(hostName: string): void {
    this.hostId = this.profileServce.GetIdByName(this.eventForm.get('kaleProfileName').value);
    this.eventForm.patchValue({
      kaleProfileId: this.hostId
    });
  }
  save(): void {
    if (this.hostBringsBeerField) {
      const control = <FormArray>this.eventForm.get('kaleBeers');
      let x = 0;
      while (x < control.length) {
        control.at(x).patchValue({
          kaleProfileId: this.hostId
        });
        x++;
      }
    }
  }

  initRecipes() {
    return this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      coursOfAction: [
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
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      kaleProfileId: 0,
      // Hvordan får jeg kaleProfileId ind her??
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
    console.log(this.users);
  }

  removeBeer(i: number): void {
    const control = <FormArray>this.eventForm.controls['kaleBeers'];
    control.removeAt(i);
  }
}
