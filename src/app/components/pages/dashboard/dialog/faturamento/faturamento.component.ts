import { Component } from '@angular/core';
import { FATURAMENTO_DATA } from 'src/database/Faturamento';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.scss']
})

export class FaturamentoComponent {
  displayedColumns: string[] = [
    'faturamento',
    'descricao',
    'Oservico'
  ];
  
  dataSource = FATURAMENTO_DATA;
}
