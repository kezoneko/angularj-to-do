import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // по умолчанию индексный компонент TasksComponent
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
