import { Component } from '@angular/core';

export interface AuditoriaElement {
  colaborador: string;
  setor: string;
  supervisor: string;
  atividade: string;
  hora: Date;
}

const ELEMENT_DATA: AuditoriaElement[] = [
  {
    colaborador: 'Cláudio Raul Lima',
    setor: 'Software', 
    supervisor: 'Kaique Fernando Rocha',
    atividade: 'Cadastro Produto',
    hora: new Date('2021-04-19T10:00:00.000')
  },
  {
    colaborador: 'Tatiane Larissa Emily Aragão',
    setor: 'Administrativo',
    supervisor: 'Nair Antônia Sales',
    atividade: 'Atualiza OS',
    hora: new Date('2021-04-19T10:00:00.000')
  },
  {
    colaborador: 'Giovanna Marli da Cunha',
    setor: 'Financeiro',
    supervisor: 'Sérgio Pietro Ruan Fogaça',
    atividade: 'Cadastro Cliente',
    hora: new Date('2021-04-19T10:00:00.000')
  },
  {
    colaborador: 'Cláudio Raul Lima',
    setor: 'Software',
    supervisor: 'Kaique Fernando Rocha',
    atividade: 'Cadastro Colaborador',
    hora: new Date('2021-04-19T10:00:00.000')
  },
  {
    colaborador: 'Giovanna Marli da Cunha',
    setor: 'Financeiro',
    supervisor: 'Sérgio Pietro Ruan Fogaça',
    atividade: 'Cadastro Produto',
    hora: new Date('2021-04-19T10:00:00.000')
  },
  {
    colaborador: 'Tatiane Larissa Emily Aragão',
    setor: 'Administrativo',
    supervisor: 'Nair Antônia Sales',
    atividade: 'Atualiza OS',
    hora: new Date('2021-04-19T10:00:00.000')
  },
  {
    colaborador: 'Cláudio Raul Lima',
    setor: 'Software',
    supervisor: 'Kaique Fernando Rocha',
    atividade: 'Cadastro Cliente',
    hora: new Date('2021-04-19T10:00:00.000')
  },
  {
    colaborador: 'Tatiane Larissa Emily Aragão',
    setor: 'Administrativo',
    supervisor: 'Nair Antônia Sales',
    atividade: 'Cadastro Colaborador',
    hora: new Date('2021-04-19T10:00:00.000')
  },
  {
    colaborador: 'Giovanna Marli da Cunha',
    setor: 'Financeiro',
    supervisor: 'Sérgio Pietro Ruan Fogaça',
    atividade: 'Atualiza OS',
    hora: new Date('2021-04-19T10:00:00.000')
  },
];

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.scss']
})
export class AuditoriaComponent {

  isActive = false;

  displayedColumns: string[] = [
    'colaborador',
    'setor',
    'supervisor', 
    'atividade',
    'hora'
  ];

  dataSource = ELEMENT_DATA;
}
