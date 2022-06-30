import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public static title = environment.title;
  public static apiUrl = environment.apiURL;
  public static production = environment.production;

  ngOnInit() {}
}
