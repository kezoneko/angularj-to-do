import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // tasks: Task[] = [{"id":1,"title":"Тест1","date":"2020-01-26T00:00:00","description":"Описание задания1","status":false},{"id":2,"title":"Тест2 С длинным заголовком","date":"2020-01-27T00:00:00","description":"Описание задания2","status":false},{"id":3,"title":"walk dog","date":"2020-01-26T22:17:00","description":"Описание задания3","status":false},{"id":4,"title":"Тест4","date":"2020-01-26T16:17:00","description":"Описание задания4","status":true},{"id":5,"title":"Тест5","date":"2020-01-31T13:00:00","description":"Описание задания5 Описание задания5 Описание задания5 Описание задания5 Описание задания5Описание задания5Описание задания5 Описание задания5 Описание задания5 Описание задания5 Описание задания5Описание задания5 Описание задания5 Описание задания5Описание задания5 Описание задания5 Описание задания5 Описание задания5","status":true},{"id":6,"title":"feed fish","date":"2020-01-26T19:53:00","description":"Ghjglkdjflksdkjlf","status":true}];
  tasks: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  // getTasks(): void {
  //   this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  // }
  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      console.log(tasks);
      this.tasks = tasks;
    });
  };

}
