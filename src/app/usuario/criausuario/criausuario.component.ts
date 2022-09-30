import { RegistroUsuario } from './../../Models/registrausuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { AreaService } from './../../area/area.service';
import { Area } from '../../Models/area';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Permissao } from 'src/app/Models/permissao';

@Component({
  selector: 'app-criausuario',
  templateUrl: './criausuario.component.html',
  styleUrls: ['./criausuario.component.scss'],
})
export class CriausuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  novoUsuario!: RegistroUsuario;
  public areasArray: Area[] = [];
  public permissoesArray: Permissao[] = [];
  public idAreaForm:number = 0;
  public idPermissaoForm:number = 0;


  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialog,
    private areaService: AreaService,
    private usuarioService: UsuarioService,
    private router : Router
  ) {

  }

  changeArea(event:any){
    this.idAreaForm = event.source.value;
  }

  changePermissao(event:any){
    this.idPermissaoForm = event.source.value;
  }


  ngOnInit(): void {
    debugger;
    this.areaService.getAreas().subscribe(data => this.areasArray = data);
    this.usuarioService.recuperaPermissoes().subscribe(data => this.permissoesArray = data);
    this.dialogRef.closeAll();
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nomeCompleto: ['', [Validators.required, Validators.minLength(5)]],
      areaSelect:['', [Validators.required]],
      permissaoSelect:['',[Validators.required]],
      endereco: [''],
      password:['',[Validators.required]],
      confirmPassword:['', [Validators.required]]
    }
    );
  }

  cadastrar() {
    debugger
    this.novoUsuario = this.novoUsuarioForm.getRawValue() as RegistroUsuario;
    this.novoUsuario.idArea = this.idAreaForm;
    this.novoUsuario.idPermissao = this.idPermissaoForm;
    var response = this.usuarioService.cadastraUsuario(this.novoUsuario).subscribe(
      (data) =>{
        this.router.navigate(['clientelogado']);
        alert(data.message);
      },
      (error) =>{
        alert('Erro ao cadastrar cliente')
      }
    )
  }
}
