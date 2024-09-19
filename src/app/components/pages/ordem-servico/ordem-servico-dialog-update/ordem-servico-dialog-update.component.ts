import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente_DATA } from 'src/Database/Cliente';
import { Colaborador_DATA } from 'src/Database/Colaborador';

@Component({
  selector: 'app-ordem-servico-dialog-update',
  templateUrl: './ordem-servico-dialog-update.component.html',
  styleUrls: ['./ordem-servico-dialog-update.component.scss']
})

export class OrdemServicoDialogUpdateComponent {

  ordemServico: FormGroup;

  colaborador: any[] = [];
  cliente: any[] = [];

  constructor(private fb: FormBuilder) {
    this.ordemServico = this.fb.group({
      cliente: ['', Validators.required],
      preco: ['', Validators.required],
      pet: ['', Validators.required],
      colaborador: ['', Validators.required],
      realizacoes: ['']
    });
  }

  ngOnInit() {
    this.colaborador = Colaborador_DATA;
    this.cliente = Cliente_DATA;
  }

  isEditable = false;
}