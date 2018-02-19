import { Component, OnInit } from '@angular/core';
import { EventGetService } from './event-get.service';
import { Observable } from 'rxjs/Observable';
import { CaleEventGet } from './caleEventGet';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  buttonNewEventShow = false;
  caleEvents: CaleEventGet[];
  displayedColumns = ['name', 'kaleProfileName', 'eventDate', 'beerName', 'recipeName'];

  constructor(private eventGet: EventGetService) { }

  ngOnInit() {
    this.eventGet.GetAll().subscribe(d => {
      this.caleEvents = d;
    });
  }
  clickNewEvent(): void {
  this.buttonNewEventShow = !this.buttonNewEventShow;
  }

}
