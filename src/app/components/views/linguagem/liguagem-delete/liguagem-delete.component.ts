import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Linguagem } from '../linguagem.model';
import { LinguagemService } from '../linguagem.service';

@Component({
  selector: 'app-liguagem-delete',
  template: `
  <form>
    <h1>DELETAR LINGUAGEM</h1>

    <mat-form-field class="form">
        <mat-label>Titulo</mat-label>
        <input matInput [(ngModel)]="linguagem.nome" type="text" name="nome" disabled>
    </mat-form-field>

    <mat-form-field class="form">
        <mat-label>Texto</mat-label>
        <textarea matInput [(ngModel)]="linguagem.descricao" type="text" name="descricao" disabled></textarea>
    </mat-form-field>

    <div class="buttons">
        <button (click)="delete()" class="mat-elevation-z8" mat-stroked-button color="primary"> DELETAR </button>
        <button (click)="cancel()" class="mat-elevation-z8" mat-stroked-button color="warn"> CANCELAR </button>
    </div>

</form>
  `,
  styleUrls: ['./linguagem-delete.component.css']
})
export class LiguagemDeleteComponent implements OnInit {

  id_usu: String = "";

  linguagem: Linguagem = {
    id: "",
    nome: "",
    descricao: ""
  };

  constructor(private service: LinguagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_usu = this.route.snapshot.paramMap.get('id_usu')!;
    this.linguagem.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.linguagem.id!).subscribe(response => {
      this.linguagem = response;
    })
  }

  delete(): void {
    this.service.delete(this.linguagem.id!).subscribe(() => {
      this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
      this.service.messsage('Linguagem deletado com sucesso!')
    }, err => {
      this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
      this.service.messsage('Falha ao deletar! tenta mais tarde...')
    })
  }

  cancel(): void {
    this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
  }

}
