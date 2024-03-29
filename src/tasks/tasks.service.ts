import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.module';
import { v1 as uuid } from 'uuid'
@Injectable()
export class TasksService {
	private tasks: Task[] = []

	getAllTasks(): Task[] {
		return this.tasks
	}

	createTask(title: string, description: string): Task {
		const task: Task = {
			id: uuid(),
			title,
			description,
			status: TaskStatus.DONE
		}

		this.tasks.push(task)

		return task
	}
}
