import { Injectable } from '@angular/core';
import { Init } from './init';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ContactService extends Init {
  
  constructor(private nav:NavController) {
   super();
    console.log('Lista de Tarefas');
    this.load();
   }

   getTodos() {
     let todos = JSON.parse(localStorage.getItem('todos'));
     return todos;
   }

   addTodo(newTodo) {
      let todos = JSON.parse(localStorage.getItem('todos'));
      // Add New TodoService
      todos.push(newTodo);
      // Set New Todos
      localStorage.setItem('todos', JSON.stringify(todos));
   }

   deleteTodo(todoText) {
     let todos = JSON.parse(localStorage.getItem('todos'));

     for(let i = 0; i <todos.length; i++) {
      if(todos[i].text == todoText) {
          todos.splice(i, 1) //remover elemento de uma lista
      }
   }
      // Set New Todos
      localStorage.setItem('todos', JSON.stringify(todos));
   }

     updateTodo(oldText, newText){  let todos = JSON.parse(localStorage.getItem('todos'));

     for(let i = 0; i <todos.length; i++) {
      if(todos[i].text == oldText) {
        todos[i].text = newText;
      }
   }
      // Set New Todos
      localStorage.setItem('todos', JSON.stringify(todos));
    

   }

  



}
