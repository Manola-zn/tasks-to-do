import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ToDoTask } from '../to-do-task';
import { ToDoTaskService } from '../to-do-task.service'

export enum SaveMode {
  None,
  New,
  Edit
}

@Component({
  selector: 'app-to-do-tasks',
  templateUrl: './to-do-tasks.component.html',
  styleUrls: ['./to-do-tasks.component.css']
})

export class ToDoTasksComponent implements OnInit {
  formGroup: FormGroup;
  todotasks: ToDoTask[];
  saveMode: SaveMode = SaveMode.None;
  headerText: string;
  selectedStatus: string = '';
  

  constructor(private _todotaskService: ToDoTaskService, private _formBuilder: FormBuilder) {
    this.formGroup = _formBuilder.group({
      'id': '',
      'name': '',
      'description': '',
      'status': '',
      'date': ''});
  }

  ngOnInit() {
    this.getTodotasks();
  }
  getTodotasks() {
    this.todotasks = this._todotaskService.getTodotasksFromData();
  }

  saveToDoTask(todotask: ToDoTask) {
    if (todotask.id) {
      this._todotaskService.updateTodotask(todotask);
    } else {
      this._todotaskService.addTodotask(todotask);
    }
    this.saveMode = SaveMode.None;
  }

  removeToDoTask(todotask: ToDoTask) {
    this._todotaskService.deleteTodotask(todotask);
  }

  cancelEditToDoTask() {
    this.formGroup.reset();
    this.saveMode = SaveMode.None;
  }

  showEditForm(todotask: ToDoTask) {
    if (!todotask) {
      return;
    }
    this.saveMode = SaveMode.Edit;
    this.headerText = 'Edit Task';
    const editedToDoTask = Object.assign({}, todotask, { date: this.applyLocale(todotask.date) });
    this.formGroup.setValue(editedToDoTask);
  }

  showNewForm() {
    this.formGroup.reset();
    this.saveMode = SaveMode.New;
    this.headerText = 'Create A New Task';
  }

  showForm() {
    return this.saveMode !== SaveMode.None;
  }

  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
  }

  selectChangeHandler (event: any){
    this.selectedStatus = event.target.value;
  }
 
}
