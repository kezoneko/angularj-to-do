import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(task => this.task = task);
  }

  save(): void {
    this.taskService.updateTask(this.task).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
