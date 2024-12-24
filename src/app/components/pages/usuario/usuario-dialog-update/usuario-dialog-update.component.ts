import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-dialog-update',
  templateUrl: './usuario-dialog-update.component.html',
  styleUrls: ['./usuario-dialog-update.component.scss']
})

export class UsuarioDialogUpdateComponent {

  cadastroMorador: FormGroup;
  hide = true;

  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

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

  atualizarCadastro(): void {
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}
