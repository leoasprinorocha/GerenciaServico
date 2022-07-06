import { AreaService } from './../area.service';
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(private areaService: AreaService) { }


  getAreas(){
    return this.areaService.getAreas();
  }

  ngOnInit(): void {
  }

}
