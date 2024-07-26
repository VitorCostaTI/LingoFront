import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplateCrudService } from 'src/app/modules/services/Template/template-crud.service';
import { Colaborador_DATA } from 'src/Database/Colaborador';

export interface EstoqueElement {
  codigo: string;
  produto: string;
  categoria: string;
  responsavel: string;
  quantidade: string;
  data: Date;
}

const ELEMENT_DATA: EstoqueElement[] = [
  {
    codigo: '001256',
    produto: 'Shampoo',
    categoria: 'Banho',
    responsavel: 'José Vicente Jesus',
    quantidade: '92',
    data: new Date('2021-04-19T10:00:00.000')
  },
  {
    codigo: '006258',
    produto: 'Perfume Dog Macho',
    categoria: 'Perfumes',
    responsavel: 'José Vicente Jesus',
    quantidade: '30',
    data: new Date('2021-04-19T10:00:00.000')
  },
  {
    codigo: '008257',
    produto: 'Brinquedo Osso',
    categoria: 'Brinquedo',
    responsavel: 'José Vicente Jesus',
    quantidade: '9',
    data: new Date('2021-04-19T10:00:00.000')
  },
  {
    codigo: '004252',
    produto: 'Vermifugo',
    categoria: 'Medicamento',
    responsavel: 'José Vicente Jesus',
    quantidade: '2',
    data: new Date('2021-04-19T10:00:00.000')
  },
  {
    codigo: '002253',
    produto: 'Coleira',
    categoria: 'Acessório',
    responsavel: 'José Vicente Jesus',
    quantidade: '12',
    data: new Date('2021-04-19T10:00:00.000')
  },
];

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
    this.getColaborador();
  }

  getColaborador(): void {
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

  dataSource = ELEMENT_DATA;
}