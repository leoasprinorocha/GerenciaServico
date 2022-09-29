import { AreaService } from 'src/app/area/area.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Area } from 'src/app/Models/area';

@Component({
  selector: 'app-detalhesarea',
  templateUrl: './detalhesarea.component.html',
  styleUrls: ['./detalhesarea.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class DetalhesAreaComponent implements OnInit {

  public areaCarregada!: Area;


  constructor(private dialogRef: MatDialog, private areaService: AreaService) { }

  ngOnInit(): void {
    this.areaService.getAreaById(this.areaService.idArea).subscribe((data) => {
      this.areaCarregada = data;
    })
  }

  abreModalDetalhesArea(){
    this.dialogRef.open(DetalhesAreaComponent, {
      height: '500px',
      width: '350px',
      hasBackdrop: true,
      backdropClass: 'menuModal',
    });
  }

  fechaModal(){
    this.dialogRef.closeAll();
  }

  salvarArea(){
    debugger;
    this.areaCarregada.nomeArea = String($('#txtNomeArea').val());
    this.areaCarregada.numeroArea = Number($('#txtNumeroArea').val());

    this.areaService.alterarArea(this.areaCarregada).subscribe((data) => {
      alert(data.message);
      window.location.href = 'areas';
    });
  }



}
