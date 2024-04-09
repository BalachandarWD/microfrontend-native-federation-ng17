import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: AppComponent,
    //     pathMatch: 'full',
    // },

    // Add this route:
    {
        path: 'flights',
        loadComponent: () =>
            loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
    },
    {
        path: 'mfe',
        loadComponent: () =>
            loadRemoteModule('mfe2', './MfeComponent').then((m) => m.AppComponent),
    },


    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.
];
