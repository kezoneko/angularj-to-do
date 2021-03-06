import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() task: Task;
  tasks: Task[];

  constructor(
    private taskService: TaskService,
    private location: Location
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

  save(): void {
    this.taskService.updateTask(this.task).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
