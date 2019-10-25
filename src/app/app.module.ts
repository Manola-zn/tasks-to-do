import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToDoTasksComponent } from './to-do-tasks/to-do-tasks.component';
import { ToDoTaskService } from './to-do-task.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToDoTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ToDoTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
