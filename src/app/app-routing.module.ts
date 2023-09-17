import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { EmpresasComponent } from './components/pages/empresas/empresas.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { UsuarioComponent } from './components/pages/usuario/usuario.component';
import { ColaboradorComponent } from './components/pages/colaborador/colaborador.component';
import { DepartamentoComponent } from './components/pages/departamento/departamento.component';
import { MateriaisComponent } from './components/pages/materiais/materiais.component';
import { OrdemServicoComponent } from './components/pages/ordem-servico/ordem-servico.component';
import { EstoqueComponent } from './components/pages/estoque/estoque.component';
import { AuditoriaComponent } from './components/pages/auditoria/auditoria.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'auditorias', component: AuditoriaComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'colaboradores', component: ColaboradorComponent },
  { path: 'departamentos', component: DepartamentoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ordemServico', component: OrdemServicoComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'materiais', component: MateriaisComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'usuarios', component: UsuarioComponent },  

  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
