import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Linguagem } from '../linguagem.model';
import { LinguagemService } from '../linguagem.service';

@Component({
  selector: 'app-liguagem-create',
  template: `
  <form>
    <h1>CRIAR NOVA LINGUAGEM</h1>

    <mat-form-field class="form">
        <mat-label>Nome</mat-label>
        <input matInput [(ngModel)]="linguagem.nome" required type="text" name="nome">
    </mat-form-field>

    <mat-form-field class="form">
        <mat-label>Descricao</mat-label>
        <textarea matInput [(ngModel)]="linguagem.descricao" required type="text" name="descricao"></textarea>
    </mat-form-field>

    <div class="buttons">
        <button (click)="create()" class="mat-elevation-z8" mat-stroked-button color="primary"> CRIAR </button>
        <button (click)="cancel()" class="mat-elevation-z8" mat-stroked-button color="warn"> CANCELAR </button>
    </div>

</form>
  `,
  styleUrls: ['./linguagem-create.component.css']
})
export class LiguagemCreateComponent implements OnInit {
  id_usu: String = "";

  linguagem: Linguagem = {
    id: "",
    nome: "",
    descricao: ""
  };

  constructor(private service: LinguagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_usu = this.route.snapshot.paramMap.get('id_usu')!;
  }

  create(): void {
    this.service.create(this.linguagem, this.id_usu).subscribe(response => {
      this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
      this.service.messsage("Linguagem criado com sucesso!");
    }, err => {
      this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
      this.service.messsage("Erro ao criar! Tenta mais tarde");
    })
  }

  cancel(): void {
    this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
  }

}
