import { Component, OnInit } from '@angular/core';
import { CaleEvent } from './caleEvent';
import { EventGetService } from './event-get.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  buttonNewEventShow = false;
  caleEvents: CaleEvent[];
  displayedColumns = ['name', 'kaleProfileName', 'eventDate', 'beerName', 'recipeName'];

  constructor(private eventGet: EventGetService) { }

  ngOnInit() {
    this.eventGet.GetAll().subscribe(d => {
      this.caleEvents = d;
    });
  // this.caleEvents = this.eventGet.GetAll();
  }
  clickNewEvent(): void {
  this.buttonNewEventShow = !this.buttonNewEventShow;
  }

}
