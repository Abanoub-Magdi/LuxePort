import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ResultsTableComponent } from './results-table/results-table.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: ResultsTableComponent,
    title: 'LuxePort | Dashboard'
  },
  {
    path: 'add-client',
    component: CrudComponent,
    title: 'LuxePort | Add Client'
  },
  {
    path: 'edit-client/:id',
    component: CrudComponent,
    title: 'LuxePort | Edit Client'
  },
];