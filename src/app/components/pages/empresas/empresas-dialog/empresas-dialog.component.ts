import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-empresas-dialog',
  templateUrl: './empresas-dialog.component.html',
  styleUrls: ['./empresas-dialog.component.scss']
})
export class EmpresasdialogComponent {

  cadastroEmpresa: FormGroup;
  isLoading: boolean = false;

  constructor(
    private templateService: TemplateCrudService,
    fb: FormBuilder
  ) {
    this.cadastroEmpresa = fb.group({
      razao_social: ['', [Validators.required, Validators.minLength]],
      cnpj: ['', [Validators.required]],
      nome_fantasia: ['', [Validators.required, Validators.minLength]],
      representante: ['', [Validators.required, Validators.minLength]],
      contato: ['', [Validators.required, Validators.minLength]],
    })
  }

  salvarCadastro(): void {
    this.isLoading = true;
    this.templateService.snackBarSuccess('Empresa cadastrada com sucesso', '')
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}