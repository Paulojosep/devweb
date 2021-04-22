import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { LiguagemCreateComponent } from './components/views/linguagem/liguagem-create/liguagem-create.component';
import { LiguagemDeleteComponent } from './components/views/linguagem/liguagem-delete/liguagem-delete.component';
import { LiguagemReadAllComponent } from './components/views/linguagem/liguagem-read-all/liguagem-read-all.component';
import { LiguagemReadComponent } from './components/views/linguagem/liguagem-read/liguagem-read.component';
import { LiguagemUpdateComponent } from './components/views/linguagem/liguagem-update/liguagem-update.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    component: UsuarioReadComponent
  },
  {
    path: 'usuarios/create',
    component: UsuarioCreateComponent
  },
  {
    path: 'usuarios/update/:id',
    component: UsuarioUpdateComponent
  },
  {
    path: 'usuarios/delete/:id',
    component: UsuarioDeleteComponent
  },
  {
    path: 'usuarios/:id_usu/linguagens',
    component: LiguagemReadAllComponent
  },
  {
    path: 'usuarios/:id_usu/linguagens/:id/read',
    component: LiguagemReadComponent
  },
  {
    path: 'usuarios/:id_usu/linguagens/create',
    component: LiguagemCreateComponent
  },
  {
    path: 'usuarios/:id_usu/linguagens/:id/update',
    component: LiguagemUpdateComponent
  },
  {
    path: 'usuarios/:id_usu/linguagens/:id/delete',
    component: LiguagemDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
