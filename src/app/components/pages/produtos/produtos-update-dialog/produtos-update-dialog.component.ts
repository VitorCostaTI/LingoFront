import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-produtos-update-dialog',
  templateUrl: './produtos-update-dialog.component.html',
  styleUrls: ['./produtos-update-dialog.component.scss']
})
export class ProdutosUpdateDialogComponent {
  isLoading: boolean = false;

  cadastroProduto: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.cadastroProduto = this.fb.group({
      produto: ['', [Validators.required, Validators.minLength]],
      categoria: ['', [Validators.required, Validators.minLength]],
      fornecedor: ['', [Validators.required, Validators.minLength]],
      preco: ['0'],
      investimento: ['0'],
      quantidade: ['', [Validators.required]],
      codigo_produto: ['', [Validators.required]],
    });
  }

  atualizarCadastro(): void {
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}
