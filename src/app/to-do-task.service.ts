import { Injectable } from '@angular/core';

import { ToDoTask } from './to-do-task';
import { TODOTASK_ITEMS } from '../app/to-do-tasks-data';

@Injectable()
export class ToDoTaskService {
  pItems: ToDoTask[] = TODOTASK_ITEMS;

  constructor() { }

  getTodotasksFromData(): ToDoTask[] {
    return this.pItems;
  }
  addTodotask(todotask: ToDoTask) {
    this.pItems.push(todotask);
  }
  updateTodotask(todotask: ToDoTask) {
    const index = this.pItems.map(x => x.id).indexOf(todotask.id);
    this.pItems[index] = todotask;
  }
  deleteTodotask(todotask: ToDoTask) {
    this.pItems.splice(this.pItems.indexOf(todotask), 1);
  }
}