import { Component } from '@angular/core';

export interface AuditoriaElement {
  colaborador: string;
  setor: string;
  supervisor: string;
  atividade: string;
  hora: string;
}

const ELEMENT_DATA: AuditoriaElement[] = [
  {colaborador: 'Cláudio Raul Lima', setor: 'Software', supervisor: 'Kaique Fernando Rocha', atividade: '', hora: ''},
  {colaborador: 'Tatiane Larissa Emily Aragão', setor: 'Administrativo', supervisor: 'Nair Antônia Sales', atividade: '', hora: ''},
  {colaborador: 'Giovanna Marli da Cunha', setor: 'Financeiro', supervisor: 'Sérgio Pietro Ruan Fogaça', atividade: '', hora: ''},
  {colaborador: 'Cláudio Raul Lima', setor: 'Software', supervisor: 'Kaique Fernando Rocha', atividade: '', hora: ''},
  {colaborador: 'Giovanna Marli da Cunha', setor: 'Financeiro', supervisor: 'Sérgio Pietro Ruan Fogaça', atividade: '', hora: ''},
  {colaborador: 'Tatiane Larissa Emily Aragão', setor: 'Administrativo', supervisor: 'Nair Antônia Sales', atividade: '', hora: ''},
  {colaborador: 'Cláudio Raul Lima', setor: 'Software', supervisor: 'Kaique Fernando Rocha', atividade: '', hora: ''},
  {colaborador: 'Tatiane Larissa Emily Aragão', setor: 'Administrativo', supervisor: 'Nair Antônia Sales', atividade: '', hora: ''},
  {colaborador: 'Giovanna Marli da Cunha', setor: 'Financeiro', supervisor: 'Sérgio Pietro Ruan Fogaça', atividade: '', hora: ''},
  {colaborador: 'Cláudio Raul Lima', setor: 'Software', supervisor: 'Kaique Fernando Rocha', atividade: '', hora: ''},
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
