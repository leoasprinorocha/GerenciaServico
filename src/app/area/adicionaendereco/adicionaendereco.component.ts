import { Usuario } from './../../Models/usuario';
import { UsuarioService } from './../../usuario/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { AreaService } from 'src/app/area/area.service';
import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/Models/area';

@Component({
  selector: 'app-adicionaendereco',
  templateUrl: './adicionaendereco.component.html',
  styleUrls: ['./adicionaendereco.component.css'],
})
export class AdicionaenderecoComponent implements OnInit {
  public areasArray: Area[] = [];
  public idAreaForm: number = 0;

  constructor(
    private areaService: AreaService,
    private dialogRef: MatDialog,
    private userService: UsuarioService
  ) {}

  ngOnInit(): void {
    debugger
    this.dialogRef.closeAll();
    let user = new Usuario();
    this.userService.retornaUsuarioSubject().subscribe((data) => {
      user = data;
    });

    if(user.idArea == 8){
    this.areaService.getAreas().subscribe((data) => (this.areasArray = data));
    }
    else{
      this.areaService.getAreaById(Number(user.idArea)).subscribe((data) => {
          this.areasArray.push(data);
      });
    }
  }

  adicionarEndereco() {}

  changeArea(event: any) {
    this.idAreaForm = event.source.value;
  }
}
