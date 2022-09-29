import { AreaService } from 'src/app/area/area.service';
import { Area } from 'src/app/Models/area';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionararea',
  templateUrl: './adicionararea.component.html',
  styleUrls: ['./adicionararea.component.css']
})
export class AdicionarareaComponent implements OnInit {
  constructor(private dialogRef: MatDialog, private areaService: AreaService) { }

  ngOnInit(): void {
    this.dialogRef.closeAll();
  }

  adicionarArea(){
    let area = new Area();
    area.nomeArea = String($('#txtNomeArea').val());
    area.numeroArea = Number($('#txtNumeroArea').val());
    this.areaService.cadastrarArea(area).subscribe((data) => {
      alert(data.message);
      window.location.href = 'areas';
    });

  }



}
