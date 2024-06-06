import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-empresas-update-dialog',
  templateUrl: './empresas-update-dialog.component.html',
  styleUrls: ['./empresas-update-dialog.component.scss']
})
export class EmpresasUpdateDialogComponent {
  cadastroEmpresa: FormGroup;
  isLoading: boolean = false;

  constructor(
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.cadastroEmpresa = fb.group({
      razao_social: ['', [Validators.required, Validators.minLength]],
      cnpj: ['', [Validators.required]],
      nome_fantasia: ['', [Validators.required, Validators.minLength]],
      representante: ['', [Validators.required, Validators.minLength]],
      contato: ['', [Validators.required, Validators.minLength]],
    })
  }

  atualizarCadastro(): void {
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}
