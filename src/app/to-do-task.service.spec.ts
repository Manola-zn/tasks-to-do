import { TestBed, inject } from '@angular/core/testing';

import { ToDoTaskService } from './to-do-task.service';

describe('ToDoTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoTaskService]
    });
  });

  it('should be created', inject([ToDoTaskService], (service: ToDoTaskService) => {
    expect(service).toBeTruthy();
  }));
});
