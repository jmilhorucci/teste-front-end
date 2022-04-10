import { Usuario } from './../../usuario';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarios: Usuario[] = [];
  formulario!: FormGroup;

  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
    this.usuarios = [];
    this.formulario = new FormGroup({
      id: new FormControl(),
      nome: new FormControl(this.formulario, [
        Validators.required,
      ]),
      email: new FormControl(this.formulario, [
        Validators.required,
        Validators.email,
      ]),
      senha: new FormControl(this.formulario, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  CadastrarUsuario(){
    if (!this.formulario.valid) {
      console.log("Formulário inválido, favor válidar os campos.");
      return;
    }
    
    /* Definindo valores para o Id */
    this.formulario.value.id = Guid.create().toString();
    /* Capturando todos os valores do formulário */
    const usuario : Usuario = this.formulario.value;
    /* Inserindo valores na lista de usuários */
    this.usuarios.push(usuario);
    /* Definindo local de armazenamento */
    localStorage.setItem('BD',JSON.stringify(this.usuarios));
    /* Resetando o formulário */
    this.formulario.reset();
    
    console.log("Formulário válido!", this.formulario.value);
    this.router.navigate(['/info'])
    
  }

}
