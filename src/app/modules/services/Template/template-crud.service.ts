import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from '../../model/Template';

@Injectable({
  providedIn: 'root'
})
export class TemplateCrudService {

  id!: Number
  private apiUrl = 'http://endereco_servidor/api';

  constructor(private http: HttpClient) { }

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
}