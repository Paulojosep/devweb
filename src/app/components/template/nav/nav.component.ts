import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <mat-sidenav-container class="nav">
    <mat-sidenav mode="side" opened>
        <mat-nav-list>
            <a routerLink="" mat-list-item>
                <i class="material-icons">home</i>
                Home
            </a>
            <a routerLink="/usuarios" mat-list-item>
                <i class="material-icons">person</i>
                Usuarios
            </a>
        </mat-nav-list>
    </mat-sidenav>

    <mat-sidenav-content>
        <router-outlet></router-outlet>
    </mat-sidenav-content>

</mat-sidenav-container>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
