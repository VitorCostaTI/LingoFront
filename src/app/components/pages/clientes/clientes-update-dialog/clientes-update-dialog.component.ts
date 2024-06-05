import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface State {
  flag: string;
  name: string;
  sigla: string;
}

@Component({
  selector: 'app-clientes-update-dialog',
  templateUrl: './clientes-update-dialog.component.html',
  styleUrls: ['./clientes-update-dialog.component.scss']
})

export class ClientesUpdateDialogComponent {
  cadastroCliente: FormGroup;

  endereco: any = {};
  cepNaoEncontrado: boolean = false;

  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Acre',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bandeira_do_Acre.svg/640px-Bandeira_do_Acre.svg.png',
      sigla: 'AC'
    },
    {
      name: 'Alagoas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandeira_de_Alagoas.svg/640px-Bandeira_de_Alagoas.svg.png',
      sigla: 'AL'
    },
    {
      name: 'Amazonas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg',
      sigla: 'AM'
    },
    {
      name: 'Amapá',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg',
      sigla: 'AP'
    },
    {
      name: 'Bahia',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg',
      sigla: 'BA'
    },
    {
      name: 'Ceará',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg',
      sigla: 'CE'
    },
    {
      name: 'Distrito Federal',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg',
      sigla: 'DF'
    },
    {
      name: 'Espirito Santo',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg',
      sigla: 'ES'
    },
    {
      name: 'Goiás',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goi%C3%A1s.svg',
      sigla: 'GO'
    },
    {
      name: 'Maranhão',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranh%C3%A3o.svg',
      sigla: 'MA'
    },
    {
      name: 'Minas Gerais',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg',
      sigla: 'MG'
    },
    {
      name: 'Mato Grosso do Sul',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Bandeira_de_Bandeirantes%2C_Mato_Grosso_do_Sul.gif/640px-Bandeira_de_Bandeirantes%2C_Mato_Grosso_do_Sul.gif',
      sigla: 'MS'
    },
    {
      name: 'Mato Grosso',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Bandeira_Mato_Grosso_-_Para%C3%ADba.png?20181224030549',
      sigla: 'MT'
    },
    {
      name: 'Pará',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bandeira_do_Par%C3%A1.svg/800px-Bandeira_do_Par%C3%A1.svg.png?20220504020907',
      sigla: 'PA'
    },
    {
      name: 'Paraiba',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bandeira_da_Para%C3%ADba.svg/800px-Bandeira_da_Para%C3%ADba.svg.png?20110814004655',
      sigla: 'PB'
    },
    {
      name: 'Pernambuco',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bandeira_de_Pernambuco.svg/640px-Bandeira_de_Pernambuco.svg.png',
      sigla: 'PE'
    },
    {
      name: 'Piaui',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg',
      sigla: 'PI'
    },
    {
      name: 'Rio de Janeiro',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg',
      sigla: 'RJ'
    },
    {
      name: 'Rio Grande do Norte',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/640px-Bandeira_do_Rio_Grande_do_Norte.svg.png',
      sigla: 'RN'
    },
    {
      name: 'Rio Grande do Sul',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg',
      sigla: 'RS'
    },
    {
      name: 'Rondônia',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bandeira_de_Rond%C3%B4nia.svg/640px-Bandeira_de_Rond%C3%B4nia.svg.png',
      sigla: 'RO'
    },
    {
      name: 'Roraima',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Bandeira_de_Roraima.svg/640px-Bandeira_de_Roraima.svg.png',
      sigla: 'RR'
    },
    {
      name: 'Santa Catarina',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Bandeira_Santa_Catarina_%281895%29.svg',
      sigla: 'SC'
    },
    {
      name: 'Sergipe',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bandeira_de_Sergipe.svg/640px-Bandeira_de_Sergipe.svg.png',
      sigla: 'SE'
    },
    {
      name: 'São Paulo',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg',
      sigla: 'SP'
    },
    {
      name: 'Tocantins',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandeira_do_Tocantins.svg/640px-Bandeira_do_Tocantins.svg.png',
      sigla: 'TO'
    },
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.cadastroCliente = this.fb.group({
      cliente: ['', [Validators.required, Validators.minLength]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      telefone2: [''],
      cep: [''],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      complemento: ['']
    });

    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  buscarEnderecoPorCep() {
    const cep = this.endereco.cep.replace(/\D/g, ''); // Remove caracteres não numéricos
    const cepRegex = /^[0-9]{8}$/; // Expressão regular para verificar se o CEP tem 8 dígitos numéricos

    if (!cepRegex.test(cep)) {
      console.log('CEP inválido');
      return;
    }

    this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`).subscribe(data => {
      if (data.erro) {
        this.cepNaoEncontrado = true;
        console.log('CEP não encontrado');
      } else {
        this.endereco.logradouro = data.logradouro;
        this.endereco.bairro = data.bairro;
        this.endereco.cidade = data.localidade;
        this.endereco.estado = data.uf;
        this.cepNaoEncontrado = false; 
      }
    }, error => {
      console.log('Erro ao buscar CEP:', error);
    });
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }
}
