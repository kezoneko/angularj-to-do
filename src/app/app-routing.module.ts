import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { TaskUpdateComponent } from './task-update/task-update.component';


const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // по умолчанию индексный компонент TasksComponent
  { path: 'tasks', component: TasksComponent }, // список заданий
  { path: 'tasks/details/:id', component: TaskComponent }, // просмотр деталей задания
  { path: 'tasks/edit/:id', component: TaskUpdateComponent } // обновление задания
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
