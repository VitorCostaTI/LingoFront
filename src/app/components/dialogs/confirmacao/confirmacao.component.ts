import { Component } from '@angular/core';
import { ConfirmacaoService } from 'src/app/modules/services/Confirmacao/confirmacao.service';
import { TemplateCrudService } from 'src/app/modules/services/Template/template-crud.service';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss']
})
export class ConfirmacaoComponent {
  constructor(private confirmacaoService: ConfirmacaoService, private templateService: TemplateCrudService) { }

  isLoading: boolean = false;

  acao: String = this.confirmacaoService.acao;
  nome: String = this.confirmacaoService.nome;


  recarregarPagina(): void {
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }

  actionConfirm(): void {
    this.isLoading = true;
    this.templateService.snackBarSuccess("Sucesso ao executar requisição", "")
    this.recarregarPagina();
  }
}
