import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ConfirmacaoService } from 'src/app/modules/services/Confirmacao/confirmacao.service';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss']
})
export class ConfirmacaoComponent {
  constructor(private confirmacaoService: ConfirmacaoService, private _snackBar: MatSnackBar) { }

  isLoading: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  acao: String = this.confirmacaoService.acao;
  nome: String = this.confirmacaoService.nome;


  recarregarPagina(): void {
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }

  actionConfirm(): void {
    this.isLoading = true;
    this._snackBar.open("Sucesso ao executar requisição", "Fechar", {
      duration: 3500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    this.recarregarPagina();
  }
}
