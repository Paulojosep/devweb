import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Linguagem } from '../linguagem.model';
import { LinguagemService } from '../linguagem.service';

@Component({
  selector: 'app-liguagem-update',
  template: `
    <form>
    <h1>ATUALIZAR LINGUAGEM</h1>

    <mat-form-field class="form">
        <mat-label>Titulo</mat-label>
        <input matInput [(ngModel)]="linguagem.nome" required type="text" name="nome" placeholder="Ex. Joao">
    </mat-form-field>

    <mat-form-field class="form">
        <mat-label>Texto</mat-label>
        <textarea matInput [(ngModel)]="linguagem.descricao" required type="text" name="descricao" placeholder="Linguagem"></textarea>
    </mat-form-field>

    <div class="buttons">
        <button (click)="update()" class="mat-elevation-z8" mat-stroked-button color="primary"> ATUALIZAR </button>
        <button (click)="cancel()" class="mat-elevation-z8" mat-stroked-button color="warn"> CANCELAR </button>
    </div>

</form>
  `,
  styleUrls: ['./linguagem-update.component.css']
})
export class LiguagemUpdateComponent implements OnInit {

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

  update(): void {
    this.service.update(this.linguagem).subscribe(resposne => {
      this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
      this.service.messsage('Linguagem atualizada com sucesso!');
    }, err => {
      this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
      this.service.messsage('Falha na atualizacao! tenta novamente....');
    })
  }

  cancel(): void {
    this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
  }

}
