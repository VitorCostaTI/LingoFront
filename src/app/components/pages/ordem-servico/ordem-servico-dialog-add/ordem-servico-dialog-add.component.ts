import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente_DATA } from 'src/Database/Cliente';
import { Colaborador_DATA } from 'src/Database/Colaborador';

@Component({
  selector: 'app-ordem-servico-dialog-add',
  templateUrl: './ordem-servico-dialog-add.component.html',
  styleUrls: ['./ordem-servico-dialog-add.component.scss']
})

export class OrdemServicoDialogAddComponent implements OnInit {

  colaborador: any[] = [];
  cliente: any[] = [];

  addOrdemServico: FormGroup;

  constructor(private fb: FormBuilder) {

    this.addOrdemServico = this.fb.group({
      cliente: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      pet: ['', [Validators.required, Validators.minLength]],
      responsavel: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.colaborador = Colaborador_DATA;
    this.cliente = Cliente_DATA;
  }
}
