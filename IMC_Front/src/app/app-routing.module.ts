import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarImcComponent } from './pages/imc/alterar-imc/alterar-imc.component';
import { CadastrarImcComponent } from './pages/imc/cadastrar-imc/cadastrar-imc.component';
import { ListarImcComponent } from './pages/imc/listar-imc/listar-imc.component';
import { CadastrarUsuarioComponent } from './pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './pages/usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path: 'pages/usuario/cadastrar',
    component: CadastrarUsuarioComponent,
  },
  {
    path: 'pages/usuario/cadastrar/:id',
    component: CadastrarUsuarioComponent,
  },
  {
    path: 'pages/usuario/listar',
    component: ListarUsuarioComponent,
  },
  {
    path: 'pages/imc/cadastrar',
    component: CadastrarImcComponent,
  },
  {
    path: 'pages/imc/listar',
    component: ListarImcComponent,
  },
  {
    path: 'pages/imc/alterar/:id',
    component: AlterarImcComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
