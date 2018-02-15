import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
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
      kaleProfileName: ['', [Validators.required, Validators.minLength(3)]],
      eventDate: '',
      name: '',
      kaleBeers: this.fb.array([
        this.fb.group({
          name: 'name1',
          // Hvordan får jeg kaleProfileId ind her??
          description: '',
          volPercentage: ''
        }),
        this.fb.group({
          name: 'name2',
          // Hvordan får jeg kaleProfileId ind her??
          description: '',
          volPercentage: ''
        }),
        this.fb.group({
          name: 'name3',
          // Hvordan får jeg kaleProfileId ind her??
          description: '',
          volPercentage: ''
        }),
        this.fb.group({
          name: 'name4',
          // Hvordan får jeg kaleProfileId ind her??
          description: '',
          volPercentage: ''
        })
      ]),
      kaleRecipes: this.fb.array([
        this.fb.group({
          name: '',
          ka: 0,
          coursOfAction: ''
        }),
        this.fb.group({
          name: '',
          ka: 0,
          coursOfAction: 'derp'
        }),
        this.fb.group({
          name: '',
          ka: 0,
          coursOfAction: ''
        }),
        this.fb.group({
          name: '',
          ka: 0,
          coursOfAction: ''
        })
      ])
    });
    // this.eventForm = new FormGroup({
    //   hostName: new FormControl(),
    //   beerName1: new FormControl(),
    //   beerName2: new FormControl(),
    //   beerName3: new FormControl(),
    //   beerName4: new FormControl()
    // });
  }
  save(): void {}
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
