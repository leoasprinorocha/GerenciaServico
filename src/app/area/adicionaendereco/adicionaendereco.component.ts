import { data } from 'jquery';
import { CadastrarclienteComponent } from './../../cliente/components/cadastrarcliente/cadastrarcliente.component';
import { Endereco } from './../../Models/endereco';
import { Usuario } from './../../Models/usuario';
import { UsuarioService } from './../../usuario/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { AreaService } from 'src/app/area/area.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Area } from 'src/app/Models/area';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-adicionaendereco',
  templateUrl: './adicionaendereco.component.html',
  styleUrls: ['./adicionaendereco.component.css'],
})

@Injectable({
  providedIn: 'root',
})

export class AdicionaenderecoComponent implements OnInit {
  public areasArray: Area[] = [];
  public idAreaForm: number = 0;
  public user!: Usuario;
  public enderecosObservable = new Observable<Endereco[]>(subscriber => {
    let enderecos: Endereco[] = [];
    this.areaService.getEnderecos().subscribe((data) => {
      enderecos = data;
      subscriber.next(enderecos);
    });
  });



  constructor(
    private areaService: AreaService,
    private dialogRef: MatDialog,
    private userService: UsuarioService,

  ) {}

  ngOnInit(): void {
    debugger
    if(!this.areaService.abreOuFechaModalCadastroEndereco){
    this.dialogRef.closeAll();
    }
    this.user = new Usuario();
    this.userService.retornaUsuarioSubject().subscribe((data) => {
      this.user = data;

    });

    if(this.user.idArea == 8){
    this.areaService.getAreas().subscribe((data) => (this.areasArray = data));
    }
    else{
      this.areaService.getAreaById(Number(this.user.idArea)).subscribe((data) => {
          this.areasArray.push(data);
      });
    }
  }

  adicionarEndereco() {
    debugger
    let endereco = new Endereco();
    endereco.nomeRua = String($('#nomeRua').val());
    endereco.nomeBairro = String($('#nomeBairro').val());
    endereco.cep = String($('#cep').val());
    endereco.idArea = this.idAreaForm;
    let enderecos: Endereco[] = [];
    this.areaService.cadastrarEndereco(endereco).subscribe((data) => {
      alert(data.message);
      if(this.areaService.abreOuFechaModalCadastroEndereco){
        this.areaService.abreOuFechaModalCadastroEndereco = false;
        this.dialogRef.closeAll();
      }
      else{
        window.location.href = 'areas'
      }
    });

  }


  abreModalCadastroEndereco(){
    this.areaService.abreOuFechaModalCadastroEndereco = true;
    this.dialogRef.open(AdicionaenderecoComponent, {
      height: '500px',
      width: '350px',
      hasBackdrop: true,
      backdropClass: 'menuModal',
    });
  }


  changeArea(event: any) {
    this.idAreaForm = event.source.value;
  }
}
