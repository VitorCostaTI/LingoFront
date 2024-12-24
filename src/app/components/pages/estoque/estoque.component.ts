import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estoque } from 'src/app/resources/model/Estoque';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';
import { Colaborador_DATA } from 'src/database/Colaborador';
import { Estoque_DATA } from 'src/database/Estoque';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})

export class EstoqueComponent {

  registroEstoque: FormGroup;
  colaborador: any[] = [];

  dataSource = new MatTableDataSource<Estoque>(Estoque_DATA)

  constructor(private fb: FormBuilder, private templateService: TemplateCrudService) {
    this.registroEstoque = this.fb.group({
      codigo_produto: ['', Validators.required],
      responsavel: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.colaborador = Colaborador_DATA;
  }

  @ViewChild(MatSort) sort!: MatSort
  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort;
  }

  registrarEstoque(): void {
    this.templateService.snackBarSuccess("Produto registrado com sucesso!!", "")
    this.registroEstoque.reset();
  }

  displayedColumns: string[] = [
    'codigo',
    'produto',
    'categoria',
    'responsavel',
    'quantidade',
    'data'
  ];
}