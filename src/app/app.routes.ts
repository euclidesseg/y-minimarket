import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'Yminimarket',
        loadComponent: () => import('./YMinimarket/yminimarket.component'),
        children:[
            {
                path:'productos',
                title:'Inventario',
                loadComponent:() => import('./YMinimarket/pages/inventario/inventario.component'),
            },
            {
                path:'actualizar/:id',
                title:'Actualizar',
                loadComponent:() => import('./YMinimarket/pages/actualizar/actualizar.component'),
            },
            {
                path:'crear',
                title:'Crear',
                loadComponent:() => import('./YMinimarket/pages/crearproducto/crearproducto.component'),
            },
            {
                path:'repostes',
                title:'Reportes',
                loadComponent:() => import('./YMinimarket/pages/reportes/reportes.component'),
            },
            {
                path:'',
                redirectTo:'productos',
                pathMatch:'full'
            }
        ]
        
    },
    {
        path:'',
        redirectTo:'Yminimarket',
        pathMatch:'full'
    }
];
