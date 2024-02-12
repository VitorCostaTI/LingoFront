import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators}       from '@angular/forms';
import {Observable}        from 'rxjs';
import {map, startWith}    from 'rxjs/operators';

export interface User {
  cliente: string;
  localizacao: string;
  email: string;
  telefone: string;
  telefone2: string;
}

export interface ColaboradoresElement {
  colaborador: string;
  setor: string;
  localizacao: string;
  email: string;
  telefone: string;
  telefone2: string;
  emergencia: string;
}

@Component({
  selector: 'app-ordem-servico-dialog-add',
  templateUrl: './ordem-servico-dialog-add.component.html',
  styleUrls: ['./ordem-servico-dialog-add.component.scss']
})

export class OrdemServicoDialogAddComponent implements OnInit{ 
  myControl = new FormControl<string | User>('');
  options: User[] = [
    {
      cliente: 'Marcela Maya Luiza da Paz', 
      localizacao: 'Jd. Nova Suiça, Limeira - SP', 
      email: 'marcela.maya.dapaz@gilconsultoria.com.br', 
      telefone: '(19) 2798-1019', 
      telefone2: '(19) 98921-4502'
    },
    {
      cliente: 'Marlene Nicole Eduarda Silva', 
      localizacao: 'Barreiro, Belém - PA', 
      email: 'marlene_silva@digen.com.br', 
      telefone: '(91) 3733-2033', 
      telefone2: '(91) 99573-4310'
    },
    {
      cliente: 'Vera Emily Aparício', 
      localizacao: 'Vila Buriti, Manaus - AM', 
      email: 'vera_emily_aparicio@unianhanguera.edu.br', 
      telefone: '(92) 2957-7625', 
      telefone2: '(92) 99987-5946'
    },
    {
      cliente: 'Cauê Daniel Carlos Moreira', 
      localizacao: 'Guabiraba, Recife - PE', 
      email: 'Cauê Daniel Carlos Moreira', 
      telefone: '(81) 3854-2780', 
      telefone2: '(81) 98678-8263'
    },
    {
      cliente: 'Renan Danilo Aparício', 
      localizacao: 'Centro, Vitória - ES', 
      email: 'renan_danilo_aparicio@rgsa.com.br', 
      telefone: '(27) 3630-8514', 
      telefone2: '(27) 99225-1705'
    },
    {
      cliente: 'Thomas Kauê Murilo da Rocha', 
      localizacao: 'Inácio Barbosa, Aracaju - SE', 
      email: 'thomas.kaue.darocha@coldblock.com.br', 
      telefone: '(79) 2991-8241', 
      telefone2: '(79) 98638-6652'
    },
    {
      cliente: 'Lorenzo Raimundo Leandro da Mota', 
      localizacao: 'Jardim Jacinto, Jacareí -SP', 
      email: 'lorenzo_damota@huios.com.br', 
      telefone: '(12) 3579-9327', 
      telefone2: '(12) 99508-4456'
    },
    {
      cliente: 'Henry Danilo Ramos', 
      localizacao: 'Presidente Altino, Osasco - SP', 
      email: 'henry.danilo.ramos@telefonica.com', 
      telefone: '(11) 2815-4323', 
      telefone2: '(11) 99141-2866'
    },
    {
      cliente: 'Anderson Gustavo Cláudio da Rosa', 
      localizacao: 'Vila Nova, Porto Alegre - RS', 
      email: 'andersongustavodarosa@comercialrizzo.com', 
      telefone: '(51) 3576-2809', 
      telefone2: '(51) 99777-9529'
    },
    {
      cliente: 'Gabriel Julio Geraldo Ramos', 
      localizacao: 'Porto Novo, São Gonçalo - RJ', 
      email: 'gabriel_julio_ramos@comercialrizzo.com', 
      telefone: '(21) 2672-8344', 
      telefone2: '(21) 99262-1519'
    },
  ];

  colaborador: ColaboradoresElement[] = [
    {
      colaborador: 'José Vicente Jesus', 
      setor: 'Contabilidade', 
      localizacao: 'Anápolis City, Anápolis - GO', 
      email: 'jose_vicente_jesus@leandroreis.com', 
      telefone: '(62) 3854-9878', 
      telefone2: '(62) 99276-0741', 
      emergencia: 'Pai - (62) 98276-0747'
    },
    {
      colaborador: 'Fernanda Marlene Novaes', 
      setor: 'Operacional', 
      localizacao: 'Jardim Novo Horizonte, Cuiabá - MT', 
      email: 'fernanda-novaes98@msds.com.br', 
      telefone: '(65) 2854-8027', 
      telefone2: '(65) 98105-9206', 
      emergencia: 'Mãe - (65) 99976-0741'
    },
    {
      colaborador: 'Nair Antônia Sales', 
      setor: 'Administrativo', 
      localizacao: 'Jardim São José (Zona Norte), São Paulo - SP', 
      email: 'nair-sales81@lnaa.com.br', 
      telefone: '(11) 2527-8445', 
      telefone2: '(11) 99861-5754', 
      emergencia: 'Marido - (11) 99576-0741'
    },
    {
      colaborador: 'Sérgio Pietro Ruan Fogaça', 
      setor: 'Financeiro', 
      localizacao: 'Santo Antônio, Teresina - PI', 
      email: 'sergio-fogaca84@demasi.com.br', 
      telefone: '(86) 2675-0807', 
      telefone2: '(86) 99678-1010', 
      emergencia: 'Filho - (86) 92276-0741'
    },
    {
      colaborador: 'Kaique Fernando Rocha', 
      setor: 'Software', 
      localizacao: 'Bom Sucesso, Imperatriz - MA', 
      email: 'kaique.fernando.rocha@vmetaiscba.com.br', 
      telefone: '(98) 2983-3202', 
      telefone2: '(98) 99136-3891', 
      emergencia: 'Esposa - (98) 99270-0741'
    },
    {
      colaborador: 'Marcela Emilly Rayssa Gomes', 
      setor: 'Operacional', 
      localizacao: 'Alto da Balança, Fortaleza - CE', 
      email: 'marcelaemillygomes@regler.com.br', 
      telefone: '(85) 2646-7783', 
      telefone2: '(85) 99669-4503', 
      emergencia: 'Neto - (85) 99546-0741'
    },
    {
      colaborador: 'Giovanna Marli da Cunha', 
      setor: 'Financeiro', 
      localizacao: 'Espinheiro, Recife - PE', 
      email: 'giovanna-dacunha70@ddfnet.com.br', 
      telefone: '(81) 2917-4236', 
      telefone2: '(81) 98492-3328', 
      emergencia: 'Primo - (81) 99276-2341'
    },
    {
      colaborador: 'Tatiane Larissa Emily Aragão', 
      setor: 'Administrativo', 
      localizacao: 'Bairro São Domingos, Ponta Porã - MS', 
      email: 'tatiane_aragao@jmmarcenaria.com.br', 
      telefone: '(67) 3772-4865', 
      telefone2: '(67) 99595-1422', 
      emergencia: 'Tio - (67) 99286-0741'
    },
    {
      colaborador: 'Ian Heitor Renan Fernandes', 
      setor: 'Operacional', 
      localizacao: 'Distrito Industrial, São José do Rio Preto - SP', 
      email: 'ian_heitor_fernandes@unitower.com.br', 
      telefone: '(17) 3793-0486', 
      telefone2: '(17) 98742-7498', 
      emergencia: 'Pai - (17) 99276-0711'
    },
    {
      colaborador: 'Cláudio Raul Lima', 
      setor: 'Software', 
      localizacao: 'Condomínio Flor do Cerrado, Cuiabá - MT', 
      email: 'claudio-lima79@orthoi.com.br', 
      telefone: '(65) 2626-1380', 
      telefone2: '(65) 99274-9153', 
      emergencia: 'Pai - (65) 99271-0741'
    },
  ];
 
  filteredOptions!: Observable<User[]>;  

  addOrdemServico: FormGroup;

  constructor(private fb:FormBuilder){
    
    this.addOrdemServico = this.fb.group({
      cliente: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      pet: ['', [Validators.required, Validators.minLength]],
      responsavel: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.cliente;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.cliente ? user.cliente : '';
  }

  private _filter(cliente: string): User[] {
    const filterValue = cliente.toLowerCase();

    return this.options.filter(option => option.cliente.toLowerCase().includes(filterValue));
  }
}
