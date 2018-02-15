import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';
import { CaleEvent } from '../caleEvent';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  eventForm: FormGroup;
  caleEvent: CaleEvent = new CaleEvent();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      // selectionbox
      kaleProfileName: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(20)]
      ],
      eventDate: ['', [Validators.required]],
      name: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ],
      kaleBeers: this.fb.array([this.initBeers()]),
      kaleRecipes: this.fb.array([this.initRecipes()])
    });
  }
  save(): void {}

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
      volPercentage: ['', [Validators.required]]
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

class Donger {
  constructor(private fb: FormBuilder) {}
  eventForm: FormGroup;
  func() {
    this.eventForm = this.fb.group({
      kaleBeers: this.fb.array([
        this.fb.group({
          name: ['simon', [Validators.required]],
          donger: 'simopn'
        }),
        this.fb.group({
          name: 'simon',
          donger: 'simopn'
        }),
        this.fb.group({
          name: 'simon',
          donger: 'simopn'
        }),
        this.fb.group({
          name: 'simon',
          donger: 'simopn'
        })
      ])
    });
  }
  func2() {
    this.func();
    console.log(this.eventForm.value);
  }
}
