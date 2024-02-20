import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';

export interface User {
  cliente: string;
  localizacao: string;
  email: string;
  telefone: string;
  telefone2: string;
}

@Component({
  selector: 'app-ordem-servico-dialog-update',
  templateUrl: './ordem-servico-dialog-update.component.html',
  styleUrls: ['./ordem-servico-dialog-update.component.scss']
})

export class OrdemServicoDialogUpdateComponent {

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

  filteredOptions!: Observable<User[]>;

  myControl = new FormControl<string | User>('');

  ordemServico: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ordemServico = this.fb.group({
      cliente: ['', Validators.required],
      preco: ['', Validators.required],
      pet: ['', Validators.required],
      colaborador: ['', Validators.required],
      realizacoes: ['']
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

  isEditable = false;
}