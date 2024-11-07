import { Routes } from '@angular/router';


//import { LayoutComponent } from '../components/layout/layout.component';
//import DashboardComponent from "../components/courses/dashboard/dashboard.component"

export const routes: Routes = [
    { path: 'dashboard',
        loadComponent: () => import('../components/courses/dashboard/dashboard.component')
    },
    { 
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full' 
    }
]

;
