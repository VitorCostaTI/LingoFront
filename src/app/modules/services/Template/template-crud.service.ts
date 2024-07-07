import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from '../../model/Template';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TemplateCrudService {

  matSnackBarHorizontal: MatSnackBarHorizontalPosition = 'center';
  matSnackBarVertical: MatSnackBarVerticalPosition = 'bottom';

  id!: Number;

  private apiUrl = 'http://endereco_servidor/api';

  constructor(
    private http: HttpClient,
    private readonly snackBar: MatSnackBar
  ) { }

  getTemplate(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  };

  createTemplate(template: Template): Observable<Template> {
    return this.http.post<Template>(this.apiUrl, template);
  };

  updateTemplate(template: Template): Observable<Template> {
    return this.http.put<Template>(`${this.apiUrl}/${this.id}`, template);
  };

  delete(id: Number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  };

  snackBarSuccess(msg: string, action: string) {
    this.snackBar.open(msg, action, {
      duration: 1500,
      horizontalPosition: this.matSnackBarHorizontal,
      verticalPosition: this.matSnackBarVertical,
      panelClass: ['snackSuccess']
    })
  }

  snackBarFailed(msg: string, action: string) {
    this.snackBar.open(msg, action, {
      duration: 1500,
      horizontalPosition: this.matSnackBarHorizontal,
      verticalPosition: this.matSnackBarVertical,
      panelClass: ['snackFailed']
    })
  }
}