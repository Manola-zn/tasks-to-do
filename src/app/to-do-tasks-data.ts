import {ToDoTask} from '../app/to-do-task'

export const TODOTASK_ITEMS: ToDoTask[] = [
 {
   id: 1,
   name: 'Lily',
   description: 'Project for Meeting',
   status: 'Done',
   date: new Date(new Date().setDate(new Date().getDate() + 4))
  
 },
 
 {
   id: 2,
   name: 'N.Hirano',
   description: 'Confirm the meeting ahead of time',
   status:'In Progress',
   date: new Date(new Date().setDate(new Date().getDate() + 5))
 }, 
];
