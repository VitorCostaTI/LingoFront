import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmacaoService } from 'src/app/resources/services/Confirmacao/confirmacao.service';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss']
})
export class ConfirmacaoComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, nome: string }
  ) { }

  isLoading: boolean = false;

  ngOnInit(): void {
    console.log(this.data)
  }

  recarregarPagina(): void {
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }

  actionConfirm(): void {
    this.dialogRef.close(true)
  }
}
