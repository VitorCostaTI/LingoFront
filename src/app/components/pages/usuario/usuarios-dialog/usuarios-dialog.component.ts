import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-dialog',
  templateUrl: './usuarios-dialog.component.html',
  styleUrls: ['./usuarios-dialog.component.scss']
})

export class UsuariosDialogComponent {

  cadastroMorador: FormGroup;
  hide = true;

  isLoading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.cadastroMorador = this.fb.group({
      colaborador: ['', [Validators.required]],
      setor: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      telefone2: [''],
      emergencia: [''],
      cep: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      complemento: [''],
      documento: ['', [Validators.required]],
      pis: ['', [Validators.required]],
      password: ['', [Validators.required]],

      image: [''],
      rg: [''],
      titulo: [''],
      militar: [''],
      nascimento: [''],
      endereco: [''],
      carteira_trabalho: ['']
    })
  }

  salvarCadastro(): void {
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}