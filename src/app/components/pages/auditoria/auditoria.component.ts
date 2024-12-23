import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Auditoria } from 'src/app/resources/model/Auditoria';
import { Auditoria_DATA } from 'src/database/Auditoria';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.scss']
})

export class AuditoriaComponent {

  isActive = false;

  dataSource = new MatTableDataSource<Auditoria>(Auditoria_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = [
    'colaborador',
    'setor',
    'supervisor',
    'atividade',
    'hora'
  ];

}