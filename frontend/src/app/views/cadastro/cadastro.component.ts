import { Usuario } from '../../usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';
import { style, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],

  /* Aplicando animações de fadeInOut para os Validators */
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(200, style({opacity:1})) 
      ]),
      transition(':leave', [
        animate(50, style({opacity:0})) 
      ])
    ])
  ]

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
    if (this.formulario.valid) {
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
      return;
    } else {

      console.log("Formulário inválido, favor válidar os campos.");

      Object.keys(this.formulario.controls).forEach(field => {
        const control = this.formulario.get(field);
        /* Habilitando o touched em todos os campos após o click p/ valida-los */
        control!.markAsTouched({ onlySelf: true });
      });
      return;
    }
    
  }

}
