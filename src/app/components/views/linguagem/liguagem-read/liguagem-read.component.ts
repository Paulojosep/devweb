import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Linguagem } from '../linguagem.model';
import { LinguagemService } from '../linguagem.service';

@Component({
  selector: 'app-liguagem-read',
  template: `
    <p>
      liguagem-read works!
    </p>
  `,
  styleUrls: ['linguagem-read.component.css']
})
export class LiguagemReadComponent implements OnInit {

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
    this.service.findById(this.linguagem.id!).subscribe(resposne => {
      this.linguagem = resposne;
    })
  }

  cancel(): void {
    this.router.navigate([`usuarios/${this.id_usu}/linguagens`]);
  }

}
