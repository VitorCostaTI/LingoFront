import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-dialog',
  templateUrl: './produtos-dialog.component.html',
  styleUrls: ['./produtos-dialog.component.scss']
})
export class ProdutosDialogComponent {

  cadastroProduto: FormGroup;

  constructor(private fb:FormBuilder){
    this.cadastroProduto = this.fb.group({
      produto: ['', Validators.required, Validators.minLength],
      categoria: ['', Validators.required, Validators.minLength],
      fornecedor: ['', Validators.required, Validators.minLength],
      preco: ['', Validators.required],
      investimento: [''],
      quantidade: ['', Validators.required],
      codigo_produto: [''],
    });
  }
}
