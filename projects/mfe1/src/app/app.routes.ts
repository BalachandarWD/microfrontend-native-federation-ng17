import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [

    // { path: '', redirectTo: 'flights', pathMatch: 'full' },
    { path: 'flights', component: AppComponent },
    {
        path: 'mfe',
        loadComponent: () =>
            loadRemoteModule('mfe2', './MfeComponent').then((m) => m.AppComponent),
    },

];
