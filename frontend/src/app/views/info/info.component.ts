import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../usuario';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor() { }

  ngOnInit(): void {
    this.ExibirInformacoes();
  }

  ExibirInformacoes(): void{
    if(localStorage.getItem('BD')){
      this.usuarios = JSON.parse(localStorage.getItem('BD')!);
    }else{
      this.usuarios = [];
    }
  }

}
