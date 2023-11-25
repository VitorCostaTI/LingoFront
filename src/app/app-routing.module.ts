import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuditoriaComponent }       from './components/pages/auditoria/auditoria.component';
import { ClientesComponent }        from './components/pages/clientes/clientes.component';
import { ComunidadeComponent }      from './components/pages/comunidade/comunidade.component';
import { DashboardComponent }       from './components/pages/dashboard/dashboard.component';
import { EmpresasComponent }        from './components/pages/empresas/empresas.component';
import { EstoqueComponent }         from './components/pages/estoque/estoque.component';
import { Error404Component }        from './components/pages/error404/error404.component';
import { OrdemServicoComponent }    from './components/pages/ordem-servico/ordem-servico.component';
import { PermissaoAcessoComponent } from './components/pages/permissao-acesso/permissao-acesso.component';
import { ProdutosComponent }        from './components/pages/produtos/produtos.component';
import { UsuarioComponent }         from './components/pages/usuario/usuario.component';

const routes: Routes = [
  { path: 'auditorias', component: AuditoriaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'comunidade', component: ComunidadeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'ordemServico', component: OrdemServicoComponent },
  { path: 'permissoes', component: PermissaoAcessoComponent},
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