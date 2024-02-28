import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  newTodo: string = '';
  todos: string[] = []; 
  editMode: boolean[] = [];

  ngOnInit() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.unshift(this.newTodo);
      this.newTodo = '';
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  toggleEditMode(index: number) {
    this.editMode[index] = !this.editMode[index];
  }

  deleteTodo(index: number) {
    if (confirm('Are you sure you want to delete this todo?')) {
      this.todos.splice(index, 1);
      this.editMode.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  saveEdit(index: number, editedValue: string) {
    this.todos[index] = editedValue;
    this.editMode[index] = false;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
