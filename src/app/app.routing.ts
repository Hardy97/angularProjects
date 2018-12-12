import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { TiendaComponent } from './components/tienda/tienda.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'keepers', component: KeepersComponent},
    {path: 'animals', component: AnimalsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
