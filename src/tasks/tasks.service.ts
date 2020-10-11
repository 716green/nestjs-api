import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  // The service is private but the methods inside of it have access to it and can return public data
  getAllTasks(): Task[]  {
    return this.tasks
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title, // same as title: title
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task; // This is to help with front-end development
  }
}
