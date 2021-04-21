import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-read',
  template: `
    <div class="content">

<div class="title">
    <h1>Usuario</h1>
</div>

<button class="mat-elevation-z8" (click)="navegarParaCategoriaCreate()"  mat-stroked-button color="primary">NOVO USUARIO</button>

<div class="mat-elevation-z8 content-table">
  <table class="table"  mat-table [dataSource]="usuarios">
        <!-- Position Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef> ID </th>
          <td mat-cell *matCellDef="let row"> {{ row.id }} </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="nome">
          <th mat-header-cell *matHeaderCellDef> NOME </th>
          <td mat-cell *matCellDef="let row"> {{ row.nome }} </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef> EMAIL </th>
          <td mat-cell *matCellDef="let row"> {{ row.email }} </td>
        </ng-container>

        <!-- Livros Column -->
        <ng-container matColumnDef="linguagens">
          <th mat-header-cell *matHeaderCellDef> LINGUAGENS </th>
          <td mat-cell *matCellDef="let row"> 
            <a class="livros" routerLink="{{ row.id }}/livros">
              <i class="material-icons">code</i> 
            </a> 
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="acoes">
          <th class="mat-header" mat-header-cell *matHeaderCellDef> AÇÕES </th>
          <td mat-cell *matCellDef="let row"> 
            <a class="edit" routerLink="update/{{ row.id }}">
              <i class="material-icons">edit</i>
            </a>
            <a class="delete" routerLink="delete/{{ row.id }}">
              <i class="material-icons">delete</i>
            </a>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
</div>

</div>
  `,
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[] = []

  displayedColumns: string[] = ['id', 'nome', 'email', 'linguagens', 'acoes']

  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      console.log(response)
      this.usuarios = response;
    })
  }

  navegarParaCategoriaCreate() {
    this.router.navigate(['usuarios/create'])
  }

}
