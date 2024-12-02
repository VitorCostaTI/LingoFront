import { Component } from '@angular/core';
import { DESPESA_DATA } from 'src/database/Despesa';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})

export class DespesasComponent {
  displayedColumns: string[] = [
    'custo',
    'descricao',
    'Oservico'
  ];
  
  dataSource = DESPESA_DATA;
}