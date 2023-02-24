import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
    },
    {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule )
    },
    {
      path: '404',
      component: ErrorPageComponent
    },
    {
      path: '**',
      redirectTo: 'HomeComponent'
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}