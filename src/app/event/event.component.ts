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
  caleEvents: Observable<CaleEvent[]>;

  constructor(private eventGet: EventGetService) { }

  ngOnInit() {
  this.caleEvents = this.eventGet.GetAll();
  }
  clickNewEvent(): void {
  this.buttonNewEventShow = !this.buttonNewEventShow;
  }

}
