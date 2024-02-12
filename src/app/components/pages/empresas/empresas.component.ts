import { Component }               from '@angular/core';
import { MatDialog }               from '@angular/material/dialog';
import { EmpresasdialogComponent } from './empresas-dialog/empresas-dialog.component';
import { FormBuilder } from '@angular/forms';

export interface EmpresasElement {
  razao_social: string;
  nome_fantasia: string;
  cnpj: string;
  representante: string;
  contato: string;
}

const ELEMENT_DATA: EmpresasElement[] = [
  {
    razao_social: 'Kennel LTDA', 
    nome_fantasia: 'Kennel', 
    cnpj: '68.308.719/0001-28', 
    representante: 'Bruno', 
    contato: '(95) 99100-4465'
  },
  {
    razao_social: 'Embrapa ME', 
    nome_fantasia: 'Embrapa', 
    cnpj: '16.985.402/0001-22', 
    representante: 'Bento', 
    contato: 'bento.luan.damata@embrapa.com.br'
  },
  {
    razao_social: 'Lingol Dogs Social', 
    nome_fantasia: 'Lingol Dogs', 
    cnpj: '90.722.864/0001-00', 
    representante: 'Ayla', 
    contato: 'ayla_sophia_daconceicao@lingodogs.com.br'
  },
  {
    razao_social: 'Bento e Isabelle Pets ME', 
    nome_fantasia: 'BentoBelle', 
    cnpj: '26.853.348/0001-15', 
    representante: 'Mariana', 
    contato: '(83) 3724-0515'
  },
  {
    razao_social: 'Pets & Cia ME', 
    nome_fantasia: 'Pets & Cia', 
    cnpj: '70.267.003/0001-71', 
    representante: 'Isis', 
    contato: '(68) 98772-9659'
  },
  {
    razao_social: 'Social Cats LTDA', 
    nome_fantasia: 'Social Cats', 
    cnpj: '25.821.968/0001-00', 
    representante: 'Stella', 
    contato: 'stella_aline_cavalcanti@suplementototal.com.br'
  },
  {
    razao_social: 'Fish Company Social', 
    nome_fantasia: 'Fish Company', 
    cnpj: '14.900.367/0001-76', 
    representante: 'Breno', 
    contato: '(51) 2665-8632'
  },
  {
    razao_social: 'RFDogs Social', 
    nome_fantasia: 'RFDogs', 
    cnpj: '529.269.829.828', 
    representante: 'Ryan', 
    contato: '(93) 99978-4313'
  },
  {
    razao_social: 'SoftHouse ME', 
    nome_fantasia: 'SoftHouse', 
    cnpj: '85.186.922/0001-98', 
    representante: 'Valentina', 
    contato: 'valentina-ramos88@softhouse.net.br'
  },
  {
    razao_social: 'VetePet LTDA', 
    nome_fantasia: 'VetePet', 
    cnpj: '28.321.614/0001-94', 
    representante: 'Daniel', 
    contato: '(86) 99634-7814'
  },
];

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})

export class EmpresasComponent {
  
  constructor(public dialog: MatDialog, fb: FormBuilder) {}

  isActive = false;

  openDialogEmpresas(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(EmpresasdialogComponent, {
      minWidth: '950px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  displayedColumns: string[] = [
    'razao_social',
    'nome_fantasia',
    'cnpj', 
    'representante',
    'contato'
  ];

  dataSource = ELEMENT_DATA;
}
