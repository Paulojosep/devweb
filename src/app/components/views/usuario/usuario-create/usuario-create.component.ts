import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-create',
  template: `
    
<form>
    <h1>CRIANDO NOVO USUARIO</h1>

    <mat-form-field class="form">
        <mat-label>Nome</mat-label>
        <input matInput [(ngModel)]="usuario.nome" type='text' name="none" placeholder="EX. joao">
    </mat-form-field>
    <mat-form-field class="form">
        <mat-label>Email</mat-label>
        <textarea matInput [(ngModel)]="usuario.email" type='text' name="email" placeholder="EX. nome@email.com"></textarea>
    </mat-form-field>

    <div class="buttons">
        <button (click)="create()" class="mat-elevation-z8" mat-stroked-button color="primary">CRIAR</button>
        <button (click)="cancel()" class="mat-elevation-z8" mat-stroked-button color="warn">CANCELAR</button>
    </div>

</form>
  `,
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    email: ''
  }

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.usuario).subscribe(response => {
      this.router.navigate(['usuarios']);
      this.service.message('Usuario criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++ ) {
        this.service.message(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['usuarios']);
  }

}
