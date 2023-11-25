import { Component }                    from '@angular/core';
import {MatDialog, MatDialogRef}        from '@angular/material/dialog';
import { UsuariosDialogComponent }      from './usuarios-dialog/usuarios-dialog.component';

export interface usuariosElement {
  usuario: string;
  setor: string;
  localizacao: string;
  email: string;
  telefone: string;
  telefone2: string;
  emergencia: string;
}

const ELEMENT_DATA: usuariosElement[] = [
  {
    usuario: 'José Vicente Jesus', 
    setor: 'Contabilidade', 
    localizacao: 'Anápolis City, Anápolis - GO', 
    email: 'jose_vicente_jesus@leandroreis.com', 
    telefone: '(62) 3854-9878', 
    telefone2: '(62) 99276-0741', 
    emergencia: 'Pai - (62) 98276-0747'
  },
  {
    usuario: 'Fernanda Marlene Novaes', 
    setor: 'Operacional', 
    localizacao: 'Jardim Novo Horizonte, Cuiabá - MT', 
    email: 'fernanda-novaes98@msds.com.br', 
    telefone: '(65) 2854-8027', 
    telefone2: '(65) 98105-9206', 
    emergencia: 'Mãe - (65) 99976-0741'
  },
  {
    usuario: 'Nair Antônia Sales', 
    setor: 'Administrativo', 
    localizacao: 'Jardim São José (Zona Norte), São Paulo - SP', 
    email: 'nair-sales81@lnaa.com.br', 
    telefone: '(11) 2527-8445', 
    telefone2: '(11) 99861-5754', 
    emergencia: 'Marido - (11) 99576-0741'
  },
  {
    usuario: 'Sérgio Pietro Ruan Fogaça', 
    setor: 'Financeiro', 
    localizacao: 'Santo Antônio, Teresina - PI', 
    email: 'sergio-fogaca84@demasi.com.br', 
    telefone: '(86) 2675-0807', 
    telefone2: '(86) 99678-1010', 
    emergencia: 'Filho - (86) 92276-0741'
  },
  {
    usuario: 'Kaique Fernando Rocha', 
    setor: 'Software', 
    localizacao: 'Bom Sucesso, Imperatriz - MA', 
    email: 'kaique.fernando.rocha@vmetaiscba.com.br', 
    telefone: '(98) 2983-3202', 
    telefone2: '(98) 99136-3891', 
    emergencia: 'Esposa - (98) 99270-0741'
  },
  {
    usuario: 'Marcela Emilly Rayssa Gomes', 
    setor: 'Operacional', 
    localizacao: 'Alto da Balança, Fortaleza - CE', 
    email: 'marcelaemillygomes@regler.com.br', 
    telefone: '(85) 2646-7783', 
    telefone2: '(85) 99669-4503', 
    emergencia: 'Neto - (85) 99546-0741'
  },
  {
    usuario: 'Giovanna Marli da Cunha', 
    setor: 'Financeiro', 
    localizacao: 'Espinheiro, Recife - PE', 
    email: 'giovanna-dacunha70@ddfnet.com.br', 
    telefone: '(81) 2917-4236', 
    telefone2: '(81) 98492-3328', 
    emergencia: 'Primo - (81) 99276-2341'
  },
  {
    usuario: 'Tatiane Larissa Emily Aragão', 
    setor: 'Administrativo', 
    localizacao: 'Bairro São Domingos, Ponta Porã - MS', 
    email: 'tatiane_aragao@jmmarcenaria.com.br', 
    telefone: '(67) 3772-4865', 
    telefone2: '(67) 99595-1422', 
    emergencia: 'Tio - (67) 99286-0741'
  },
  {
    usuario: 'Ian Heitor Renan Fernandes', 
    setor: 'Operacional', 
    localizacao: 'Distrito Industrial, São José do Rio Preto - SP', 
    email: 'ian_heitor_fernandes@unitower.com.br', 
    telefone: '(17) 3793-0486', 
    telefone2: '(17) 98742-7498', 
    emergencia: 'Pai - (17) 99276-0711'
  },
  {
    usuario: 'Cláudio Raul Lima', 
    setor: 'Software', 
    localizacao: 'Condomínio Flor do Cerrado, Cuiabá - MT', 
    email: 'claudio-lima79@orthoi.com.br', 
    telefone: '(65) 2626-1380', 
    telefone2: '(65) 99274-9153', 
    emergencia: 'Pai - (65) 99271-0741'
  },
];

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent {
  constructor(public dialog: MatDialog) {}

  isActive = false;

  openDialogColaborador(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UsuariosDialogComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  displayedColumns: string[] = [
    'usuario',
    'setor',
    'localizacao', 
    'email',
    'telefone',
    'telefone2',
  ];

  dataSource = ELEMENT_DATA;
}