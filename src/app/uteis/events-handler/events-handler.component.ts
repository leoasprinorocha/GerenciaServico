import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-events-handler',
  templateUrl: './events-handler.component.html',
  styleUrls: ['./events-handler.component.css']
})
export class EventsHandlerComponent implements OnInit {

  constructor() { }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
