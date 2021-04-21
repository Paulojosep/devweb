import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: String = environment.baseUrl; //URL do Banck-End

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Usuario[]> {
    const url = `${this.baseUrl}/usuario`;
    return this.http.get<Usuario[]>(url);
  }

  findById(id: String):Observable<Usuario> {
    const url = `${this.baseUrl}/usuario/${id}`
    return this.http.get<Usuario>(url);
  }

  create(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/usuario`;
    return this.http.post<Usuario>(url, usuario);
  }

  update(usuario: Usuario): Observable<void> {
    const url = `${this.baseUrl}/usuario/${usuario.id}`;
    return this.http.put<void>(url,usuario);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/usuario/${id}`;
    return this.http.delete<void>(url);
  }

  message(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
