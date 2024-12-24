import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';
import { AutomacoesDialogComponent } from './automacoes-dialog/automacoes-dialog.component';

@Component({
  selector: 'app-automacao',
  templateUrl: './automacao.component.html',
  styleUrls: ['./automacao.component.scss']
})

export class AutomacaoComponent {

  quantidade = 25;
  power: boolean = true;
  isTemperatura: boolean = false;
  isLoading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private templateService: TemplateCrudService
  ) { }

  @HostListener('window:keydown.control.m', ['$event'])
  handlePlus(event: KeyboardEvent) {
    event.preventDefault();
    this.incrementar()
  }

  @HostListener('window:keydown.control.b', ['$event'])
  handleDecrement(event: KeyboardEvent) {
    event.preventDefault();
    this.decrementar()
  }

  powerFunction(): void {
    this.power = !this.power;
  }

  openDialogAutomacao(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AutomacoesDialogComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  incrementar(): void {
    if (this.quantidade < 35) {
      this.quantidade++;
    } else {
      this.templateService.snackBarFailed("Temperatura maxima atingida!!", "")
    }
  }

  decrementar(): void {
    if (this.quantidade > 10) {
      this.quantidade--;
    } else {
      this.templateService.snackBarFailed("Temperatura minima atingida!!", "")
    }
  }
}