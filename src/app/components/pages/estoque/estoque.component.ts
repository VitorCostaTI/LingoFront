import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private templateService: TemplateCrudService) {
    this.registroEstoque = this.fb.group({
      codigo_produto: ['', Validators.required],
      responsavel: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.colaborador = Colaborador_DATA;
  }

  displayedColumns: string[] = [
    'codigo',
    'produto',
    'categoria',
    'responsavel',
    'quantidade',
    'data'
  ];

  registrarEstoque(): void {
    this.templateService.snackBarSuccess("Produto registrado com sucesso!!", "")
    this.registroEstoque.reset();
  }

  dataSource = Estoque_DATA;
}