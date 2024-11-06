import { Routes } from '@angular/router';
//import { LayoutComponent } from '../components/layout/layout.component';
//import DashboardComponent from "../components/courses/dashboard/dashboard.component"

export const routes: Routes = [
    { path: '',
    loadComponent: () => import('../components/layout/layout.component')},
    // Otras rutas...
];
