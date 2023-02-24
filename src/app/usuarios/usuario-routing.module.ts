import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuario',
        component: UsuarioComponent
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class UsuarioRoutingModule { }
