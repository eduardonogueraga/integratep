import { Routes } from '@angular/router';

import { LayoutComponent } from '../components/layout/layout.component';
import { DashboardComponent } from '../components/courses/dashboard/dashboard.component';
import { FlashcardsComponent } from '../components/courses/flashcards/flashcards.component';
import { TalleresComponent } from '../components/courses/talleres/talleres.component';


export const routes: Routes = [
    { path: '', component: LayoutComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'dashboard/flashcards', component: FlashcardsComponent},
    { path: 'dashboard/talleres', component: TalleresComponent},
    { 
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full' 
    }
];

