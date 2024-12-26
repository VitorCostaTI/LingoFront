import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-produtos-update-dialog',
  templateUrl: './produtos-dialog.component.html',
  styleUrls: ['./produtos-dialog.component.scss']
})
export class ProdutosDialogComponent {
  isLoading: boolean = false;

  cadastroProduto: FormGroup;

  constructor(
    private fb: FormBuilder,
    private templateService: TemplateCrudService,
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

  salvarCadastro(): void {
    this.isLoading = true;
    this.templateService.snackBarSuccess('Produto atualizado com sucesso', '')
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}