import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

// The controller only handles request and sends response (using service)

// Decorators use methods or properties to add extra functionality in TS. Here, the route defined as an argument  
// Any inbound calls to '/tasks' will be handeled here
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
