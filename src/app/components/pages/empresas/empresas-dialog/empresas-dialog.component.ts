import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresas-dialog',
  templateUrl: './empresas-dialog.component.html',
  styleUrls: ['./empresas-dialog.component.scss']
})
export class EmpresasdialogComponent {

  cadastroEmpresa: FormGroup

  constructor(fb: FormBuilder) {
    this.cadastroEmpresa = fb.group({
      razao_social: ['', [Validators.required, Validators.minLength]],
      cnpj: ['', [Validators.required]],
      fantasia: ['', [Validators.required, Validators.minLength]],
      representante: ['', [Validators.required, Validators.minLength]],
      contato: ['', [Validators.required, Validators.minLength]],
    })
  }
}