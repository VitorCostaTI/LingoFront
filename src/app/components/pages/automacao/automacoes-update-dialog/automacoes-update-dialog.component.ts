import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-automacoes-update-dialog',
  templateUrl: './automacoes-update-dialog.component.html',
  styleUrls: ['./automacoes-update-dialog.component.scss']
})
export class AutomacoesUpdateDialogComponent {
  cadastroAutomacao: FormGroup;
  isLoading: boolean = false;

  constructor(
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.cadastroAutomacao = fb.group({
      ip: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      fabricante: ['', [Validators.required]],
      equipamento: ['', [Validators.required]],
      firmware: ['', [Validators.required]],
      local: ['', [Validators.required]],
      porta: ['', [Validators.required]]
    })
  }

  salvarCadastro(): void {
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}
