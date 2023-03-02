import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidacionesComponent } from './validaciones/validaciones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'validaciones',
        component: ValidacionesComponent
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
export class ValidacionRoutingModule { }
