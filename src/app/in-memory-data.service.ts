import { Injectable } from '@angular/core';
import { Task } from './task';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { "id":1, "title":"Тест1", "date":"2020-01-26T00:00:00", "description":"Описание задания1", "status":false },
      { "id":2, "title":"Тест2 С длинным заголовком", "date":"2020-01-27T00:00:00", "description":"Описание задания2", "status":false },
      { "id":3, "title":"walk dog", "date":"2020-01-26T22:17:00", "description":"Описание задания3", "status":false },
      { "id":4, "title":"Тест4", "date":"2020-01-26T16:17:00", "description":"Описание задания4", "status":true },
      { "id":5, "title":"Тест5", "date":"2020-01-31T13:00:00", "description":"Описание задания5 Описание задания5 Описание задания5 Описание задания5 Описание задания5Описание задания5Описание задания5 Описание задания5 Описание задания5 Описание задания5 Описание задания5Описание задания5 Описание задания5 Описание задания5Описание задания5 Описание задания5 Описание задания5 Описание задания5", "status":true },
      { "id":6, "title":"feed fish", "date":"2020-01-26T19:53:00", "description":"Ghjglkdjflksdkjlf", "status":true }
    ];
    return {tasks};
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }

  constructor() { }
}
