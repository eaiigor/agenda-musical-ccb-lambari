import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnsaioRegionalComponent } from './components/ensaio-regional/ensaio-regional.component';
import { EnsaiosLocaisComponent } from './components/ensaios-locais/ensaios-locais.component';
import { ContatoComponent } from './components/contato/contato.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'ensaio-regional', component: EnsaioRegionalComponent},
    {path: 'ensaios-locais', component: EnsaiosLocaisComponent},
    {path: 'contato', component: ContatoComponent},
];
