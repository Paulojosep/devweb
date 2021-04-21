import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <mat-card class="home mat-elevation-z4">
    <mat-card-title class="title">Bem vindo!</mat-card-title>
    <mat-card-subtitle class="subtitle">Sistema para exemplificar um CRUD usando Anguloar e Spring Boot</mat-card-subtitle>
  </mat-card>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
