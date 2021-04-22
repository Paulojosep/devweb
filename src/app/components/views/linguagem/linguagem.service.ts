import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Linguagem } from './linguagem.model';

@Injectable({
  providedIn: 'root'
})
export class LinguagemService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByUsuario(id_usu: String): Observable<Linguagem[]> {
    const url = `${this.baseUrl}/linguagens?usuario=${id_usu}`
    return this.http.get<Linguagem[]>(url);
  }

  findById(id: String): Observable<Linguagem> {
    const url = `${this.baseUrl}/linguagens/${id}`
    return this.http.get<Linguagem>(url);
  }

  create(linguagem: Linguagem, id_usu: String): Observable<Linguagem> {
    const url = `${this.baseUrl}/linguagens?usuario=${id_usu}`;
    return this.http.post<Linguagem>(url,linguagem);
  }

  update(linguagem: Linguagem): Observable<Linguagem> {
    const url = `${this.baseUrl}/linguagens/${linguagem.id}`;
    return this.http.put<Linguagem>(url, linguagem);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/linguagens/${id}`;
    return this.http.delete<void>(url);
  }

  messsage(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
