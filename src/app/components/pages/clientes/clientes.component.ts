import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ClientesDialogComponent } from './clientes-dialog/clientes-dialog.component';

export interface DespesaElement {
  cliente: string;
  localizacao: string;
  email: string;
  telefone: string;
  telefone2: string;
}

const ELEMENT_DATA: DespesaElement[] = [
  {cliente: 'Marcela Maya Luiza da Paz', localizacao: 'Jd. Nova Suiça, Limeira - SP', email: 'marcela.maya.dapaz@gilconsultoria.com.br', telefone: '(19) 2798-1019', telefone2: '(19) 98921-4502'},
  {cliente: 'Marlene Nicole Eduarda Silva', localizacao: 'Barreiro, Belém - PA', email: 'marlene_silva@digen.com.br', telefone: '(91) 3733-2033', telefone2: '(91) 99573-4310'},
  {cliente: 'Vera Emily Aparício', localizacao: 'Vila Buriti, Manaus - AM', email: 'vera_emily_aparicio@unianhanguera.edu.br', telefone: '(92) 2957-7625', telefone2: '(92) 99987-5946'},
  {cliente: 'Cauê Daniel Carlos Moreira', localizacao: 'Guabiraba, Recife - PE', email: 'Cauê Daniel Carlos Moreira', telefone: '(81) 3854-2780', telefone2: '(81) 98678-8263'},
  {cliente: 'Renan Danilo Aparício', localizacao: 'Centro, Vitória - ES', email: 'renan_danilo_aparicio@rgsa.com.br', telefone: '(27) 3630-8514', telefone2: '(27) 99225-1705'},
  {cliente: 'Thomas Kauê Murilo da Rocha', localizacao: 'Inácio Barbosa, Aracaju - SE', email: 'thomas.kaue.darocha@coldblock.com.br', telefone: '(79) 2991-8241', telefone2: '(79) 98638-6652'},
  {cliente: 'Lorenzo Raimundo Leandro da Mota', localizacao: 'Jardim Jacinto, Jacareí -SP', email: 'lorenzo_damota@huios.com.br', telefone: '(12) 3579-9327', telefone2: '(12) 99508-4456'},
  {cliente: 'Henry Danilo Ramos', localizacao: 'Presidente Altino, Osasco - SP', email: 'henry.danilo.ramos@telefonica.com', telefone: '(11) 2815-4323', telefone2: '(11) 99141-2866'},
  {cliente: 'Anderson Gustavo Cláudio da Rosa', localizacao: 'Vila Nova, Porto Alegre - RS', email: 'andersongustavodarosa@comercialrizzo.com', telefone: '(51) 3576-2809', telefone2: '(51) 99777-9529'},
  {cliente: 'Gabriel Julio Geraldo Ramos', localizacao: 'Porto Novo, São Gonçalo - RJ', email: 'gabriel_julio_ramos@comercialrizzo.com', telefone: '(21) 2672-8344', telefone2: '(21) 99262-1519'},
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  constructor(public dialog: MatDialog) {}

  isActive = false;

  openDialogCliente(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ClientesDialogComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  displayedColumns: string[] = [
    'cliente',
    'localizacao',
    'email', 
    'telefone',
    'telefone2'
  ];

  dataSource = ELEMENT_DATA;
}
