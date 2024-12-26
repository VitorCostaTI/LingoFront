import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-empresas-dialog',
  templateUrl: './empresas-dialog.component.html',
  styleUrls: ['./empresas-dialog.component.scss']
})
export class EmpresasDialogComponent {
  cadastroEmpresa: FormGroup;
  isLoading: boolean = false;

  constructor(
    fb: FormBuilder,
    private templateService: TemplateCrudService,
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
    this.templateService.snackBarSuccess('Empresa atualizada com sucesso', '')
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}