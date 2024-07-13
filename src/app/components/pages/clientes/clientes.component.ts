import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClientesDialogComponent } from './clientes-dialog/clientes-dialog.component';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/modules/services/Confirmacao/confirmacao.service';
import { ClientesUpdateDialogComponent } from './clientes-update-dialog/clientes-update-dialog.component';

export interface ClienteElement {
  cliente: string;
  email: string;
  cpf: string;
  telefone: string;
  telefone2: string;
  localizacao: string;
  logradouro: string;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
  complemento: string;
}

const ELEMENT_DATA: ClienteElement[] = [
  {
    cliente: 'Marcela Maya Luiza da Paz',
    email: 'marcela.maya.dapaz@gilconsultoria.com.br',
    cpf: '455.817.170-60',
    telefone: '+55 (19) 2798-1019',
    telefone2: '+55 (19) 98921-4502',
    localizacao: 'Jd. Nova Suiça, Limeira - SP',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Jd. Nova Suiça",
    cidade: "Perdida",
    estado: "SP",
    complemento: "Endereço Ficticio"
  },
  {
    cliente: 'Marlene Nicole Eduarda Silva',
    email: 'marlene_silva@digen.com.br',
    cpf: '455.817.170-60',
    telefone: '+55 (91) 3733-2033',
    telefone2: '+55 (91) 99573-4310',
    localizacao: 'Barreiro, Belém - PA',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Barreiro",
    cidade: "Belém",
    estado: "PA",
    complemento: "Endereço Ficticio"
  },
  {
    cliente: 'Vera Emily Aparício',
    email: 'vera_emily_aparicio@unianhanguera.edu.br',
    cpf: '455.817.170-60',
    telefone: '+55 (92) 2957-7625',
    telefone2: '+55 (92) 99987-5946',
    localizacao: 'Vila Buriti, Manaus - AM',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Vila Buriti",
    cidade: "Manaus",
    estado: "AM",
    complemento: "Endereço Ficticio"
  },
  {
    cliente: 'Cauê Daniel Carlos Moreira',
    email: 'Cauê Daniel Carlos Moreira',
    cpf: '455.817.170-60',
    telefone: '+55 (81) 3854-2780',
    telefone2: '+55 (81) 98678-8263',
    localizacao: 'Guabiraba, Recife - PE',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Guabiraba",
    cidade: "Recife",
    estado: "PE",
    complemento: "Endereço Ficticio"
  },
  {
    cliente: 'Renan Danilo Aparício',
    email: 'renan_danilo_aparicio@rgsa.com.br',
    cpf: '455.817.170-60',
    telefone: '+55 (27) 3630-8514',
    telefone2: '+55 (27) 99225-1705',
    localizacao: 'Centro, Vitória - ES',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Centro",
    cidade: "Vitória",
    estado: "ES",
    complemento: "Endereço Ficticio"
  },
  {
    cliente: 'Thomas Kauê Murilo da Rocha',
    email: 'thomas.kaue.darocha@coldblock.com.br',
    cpf: '455.817.170-60',
    telefone: '+55 (79) 2991-8241',
    telefone2: '+55 (79) 98638-6652',
    localizacao: 'Inácio Barbosa, Aracaju - SE',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Inácio Barbosa",
    cidade: "Aracaju",
    estado: "SE",
    complemento: "Endereço Ficticio"
  },
  {
    cliente: 'Lorenzo Raimundo Leandro da Mota',
    email: 'lorenzo_damota@huios.com.br',
    cpf: '455.817.170-60',
    telefone: '+55 (12) 3579-9327',
    telefone2: '+55 (12) 99508-4456',
    localizacao: 'Jardim Jacinto, Jacareí -SP',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Jardim Jacinto",
    cidade: "Jacareí",
    estado: "SP",
    complemento: "Endereço Ficticio"
  },
  {
    cliente: 'Henry Danilo Ramos',
    email: 'henry.danilo.ramos@telefonica.com',
    cpf: '455.817.170-60',
    telefone: '+55 (11) 2815-4323',
    telefone2: '+55 (11) 99141-2866',
    localizacao: 'Presidente Altino, Osasco - SP',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Presidente Altino",
    cidade: "Osasco",
    estado: "SP",
    complemento: "Endereço Ficticio"
  },
  {
    cliente: 'Anderson Gustavo Cláudio da Rosa',
    email: 'andersongustavodarosa@comercialrizzo.com',
    cpf: '455.817.170-60',
    telefone: '+55 (51) 3576-2809',
    telefone2: '+55 (51) 99777-9529',
    localizacao: 'Vila Nova, Porto Alegre - RS',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Vila Nova",
    cidade: "Porto Alegre",
    estado: "RS",
    complemento: "Endereço Ficticio"
  },
  {
    cliente: 'Gabriel Julio Geraldo Ramos',
    email: 'gabriel_julio_ramos@comercialrizzo.com',
    cpf: '455.817.170-60',
    telefone: '+55 (21) 2672-8344',
    telefone2: '+55 (21) 99262-1519',
    localizacao: 'Porto Novo, São Gonçalo - RJ',
    logradouro: "Rua esquina da quadra",
    cep: "13000-000",
    bairro: "Porto Novo",
    cidade: "São Gonçalo",
    estado: "RJ",
    complemento: "Endereço Ficticio"
  },
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent {

  constructor(public dialog: MatDialog, private confirmacaoService: ConfirmacaoService) { }

  isActive = false;

  openDialogCliente(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ClientesDialogComponent, {
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogUpdateCliente(enterAnimationDuration: string, exitAnimationDuration: string, cliente: any): void {
    this.dialog.open(ClientesUpdateDialogComponent, {
      minWidth: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: cliente
    });
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, nome: string): void {
    this.confirmacaoService.acao = "deletar";
    this.confirmacaoService.nome = nome;
    this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  displayedColumns: string[] = [
    'cliente',
    'localizacao',
    'email',
    'telefone',
    'telefone2',
    'acoes'
  ];

  dataSource = ELEMENT_DATA;
}