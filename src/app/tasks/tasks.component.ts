import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [
    { id: 1, title: 'Test task 1', datetime: new Date("2010-10-11 08:03:02"), description: 'This is the description of test task number 1', status: false },
    { id: 2, title: 'Test task 1', datetime: new Date("2010-10-11 08:03:02"), description: 'This is the description of test task number 1', status: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
