import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  isLoading: boolean = false;

  cadastroColuna: FormGroup;
  limpaNotas: any = []

  entidades: Array<{ anotacao: string }> = [];
  entidade: Array<{ anotacao: string }> = [];
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['anotacao', 'actions'];

  constructor(
    private templateService: TemplateCrudService,
    private fb: FormBuilder
  ) {
    this.cadastroColuna = this.fb.group({
      anotacao: ['', [Validators.required, Validators.minLength]],
    })

    this.dataSource = new MatTableDataSource(this.entidades);
  }

  addColumn(): void {
    this.entidades.push(this.cadastroColuna.value);
    this.dataSource.data = this.entidades.slice();
    this.cadastroColuna.reset();
  }

  deleteColumn(entry: { anotacao: string }) {
    const index = this.entidades.indexOf(entry);
    if (index >= 0) {
      this.entidades.splice(index, 1);
      this.dataSource.data = this.entidades.slice();
    }
  }

  saveColumn() {
    this.isLoading = true;
    setTimeout(() => {
      console.log(this.dataSource.data);
      this.entidades.length = 0;
      this.templateService.snackBarSuccess('Anotações salvas com sucesso!', '');
    }, 1000)
  }
}
