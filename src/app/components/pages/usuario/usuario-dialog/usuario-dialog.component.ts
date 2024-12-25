import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-usuario-dialog-update',
  templateUrl: './usuario-dialog.component.html',
  styleUrls: ['./usuario-dialog.component.scss']
})

export class UsuarioDialogComponent {

  cadastroUsuario: FormGroup;
  hide = true;

  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private templateService: TemplateCrudService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.cadastroUsuario = this.fb.group({
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
    this.templateService.snackBarSuccess('Usuario cadastrado com sucesso', '')
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}
