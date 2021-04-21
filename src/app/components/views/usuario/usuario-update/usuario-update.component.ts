import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-update',
  template: `
  <form>
    <h1>ATUALIZAR USUARIO</h1>

    <mat-form-field class="form">
        <mat-label>Nome</mat-label>
        <input matInput [(ngModel)]="usuario.nome" type='text' name="none" placeholder="EX. joao">
    </mat-form-field>
    <mat-form-field class="form">
        <mat-label>Email</mat-label>
        <input matInput [(ngModel)]="usuario.email" type='text' name="email" placeholder="EX. nome@email.com">
    </mat-form-field>

    <div class="buttons">
        <button (click)="update()" class="mat-elevation-z8" mat-stroked-button color="primary">ATUAIZAR</button>
        <button (click)="cancel()" class="mat-elevation-z8" mat-stroked-button color="warn">CANCELAR</button>
    </div>

</form>
  `,
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario: Usuario = {
    id: '',
    nome: '',
    email: ''

  }

  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.usuario.id!).subscribe(response => {
      this.usuario.nome = response.nome;
      this.usuario.email = response.email;
    })
  }

  update(): void {
    this.service.update(this.usuario).subscribe(resposnse => {
      this.router.navigate(['usuarios']);
      this.service.message('Usuario Atualizado com sucesso');
    }, err => {
      this.service.message("Todos os compos devem ser prenchidos");
    })
  }

  cancel(): void {
    this.router.navigate(['usuarios'])
  }

}
