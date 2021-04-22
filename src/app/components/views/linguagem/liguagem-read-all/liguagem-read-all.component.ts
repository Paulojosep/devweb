import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Linguagem } from '../linguagem.model';
import { LinguagemService } from '../linguagem.service';

@Component({
  selector: 'app-liguagem-read-all',
  template: `
  <div class="content">

<div class="title">
    <h1>LINGUAGEM</h1>
</div>

<button class="mat-elevation-z8" (click)="navegarParaCriarLinguagem()" mat-stroked-button color="primary">NOVA LINGUAGEM</button>

<div class="mat-elevation-z8 content-table">
    <table class="table" mat-table [dataSource]="linguagens">
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

        <!-- Livros Column -->
        <ng-container matColumnDef="descricao">
          <th mat-header-cell *matHeaderCellDef> DESCRICAO </th>
          <td mat-cell *matCellDef="let row"> {{ row.descricao }} </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="acoes">
          <th class="mat-header" mat-header-cell *matHeaderCellDef> AÇÕES </th>
          <td mat-cell *matCellDef="let row"> 
            <a class="edit" routerLink="{{ row.id }}/update">
              <i class="material-icons">edit</i>
            </a>
            <a class="delete" routerLink="{{ row.id }}/delete">
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
  styleUrls: ['linguagem-read-all.component.css']
})
export class LiguagemReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

  id_usu: String = "";

  linguagens: Linguagem[] = []

  constructor(private service: LinguagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_usu = this.route.snapshot.paramMap.get('id_usu')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByUsuario(this.id_usu).subscribe(response => {
      this.linguagens = response;
      console.log(this.linguagens);
    })
  }

  navegarParaCriarLinguagem(): void {
    this.router.navigate([`usuarios/${this.id_usu}/linguagens/create`]);
  }

}
