import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-delete',
  template: `
  <form>
    <h1>DELETANDO USUARIO</h1>

    <mat-form-field class="form">
        <mat-label>Nome</mat-label>
        <input matInput [(ngModel)]="usuario.nome" type='text' name="none" disabled>
    </mat-form-field>
    <mat-form-field class="form">
        <mat-label>Email</mat-label>
        <textarea matInput [(ngModel)]="usuario.email" type='text' name="email" disabled></textarea>
    </mat-form-field>

    <div class="buttons">
        <button (click)="delete()" class="mat-elevation-z8" mat-stroked-button color="primary">DELETAR</button>
        <button (click)="cancel()" class="mat-elevation-z8" mat-stroked-button color="warn">CANCELAR</button>
    </div>

</form>
  `,
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario: Usuario = {
    id: '',
    nome: '',
    email: ''
  }

  constructor(private router: Router, private route: ActivatedRoute,private service: UsuarioService) { }

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.usuario.id!).subscribe(response => {
      this.usuario.nome = response.nome;
      this.usuario.email = response.email;
    })
  }

  delete(): void {
    this.service.delete(this.usuario.id!).subscribe(response => {
      this.router.navigate(['usuarios']);
      this.service.message('Usuario deletado com sucesso!');
    }, err => {
      this.service.message(err.error.error);
    })
  }

  cancel(): void {
    this.router.navigate(['usuarios']);
  }

}
