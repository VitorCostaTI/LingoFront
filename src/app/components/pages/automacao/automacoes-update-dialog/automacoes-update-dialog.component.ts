import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';

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
    private templateService: TemplateCrudService,
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

  atualizarCadastro(): void {
    this.isLoading = true;
    this.templateService.snackBarSuccess('Dispositivo atualizado com sucesso', '')
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}
