import { Component } from '@angular/core';
import { Auditoria_DATA } from 'src/Database/Auditoria';

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

  dataSource = Auditoria_DATA;
}