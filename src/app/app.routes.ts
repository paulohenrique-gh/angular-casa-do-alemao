import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatesComponent } from './pages/states/states.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'states',
        component: StatesComponent
    }
];
