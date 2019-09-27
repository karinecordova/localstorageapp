import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { NavController } from '@ionic/angular';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';

  constructor(private todoService: ContactService, private nav:NavController) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    let newTodo = {
      text: this.text
    }
    this.todos.push(newTodo);

    this.todoService.addTodo(newTodo);
  }
  
  deleteTodo(todoText) {
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].text == todoText) {
          this.todos.splice(i, 1);
      }
    }
    this.todoService.deleteTodo(todoText);
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }

  updateTodo() {
    console.log(this.text);
        for(let i = 0; i < this.todos.length; i++) {
          if(this.todos[i].text == this.oldText) {
          this.todos[i].text = this.text;
      }
        
  }

  this.todoService.updateTodo(this.oldText, this.text);
  
  }

  doRefresh(event) {
    console.log('Begin async operation');
     setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    
  }

  
 
  }


