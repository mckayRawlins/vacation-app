import { Routes } from '@angular/router';
import { Display } from './components/display/display';
import { Details } from './components/details/details';

export const routes: Routes = [
  {
    path: '',
    component: Display,
  },
  { path: 'details/:id', component: Details },
];
