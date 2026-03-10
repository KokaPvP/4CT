import { Routes } from '@angular/router';
import { Start } from './components/start/start';
import { Normalny } from './components/normalny/normalny';

export const routes: Routes = [
    {path:'',component: Start},
    {path:'normalny',component: Normalny}
];
