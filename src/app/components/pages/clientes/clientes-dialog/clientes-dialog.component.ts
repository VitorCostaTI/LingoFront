import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-clientes-dialog',
  templateUrl: './clientes-dialog.component.html',
  styleUrls: ['./clientes-dialog.component.scss']
})

export class ClientesDialogComponent {
  cadastroCliente: FormGroup;

  endereco: any = {};
  cepNaoEncontrado: boolean = false;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private templateService: TemplateCrudService,
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

  atualizarCadastro(): void {
    this.isLoading = true;
    this.templateService.snackBarSuccess('Cliente atualizado com sucesso', '')
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}