import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-automacoes-dialog',
  templateUrl: './automacoes-dialog.component.html',
  styleUrls: ['./automacoes-dialog.component.scss']
})
export class AutomacoesDialogComponent {
  cadastroAutomacao: FormGroup;
  isLoading: boolean = false;

  constructor(fb: FormBuilder) {
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
