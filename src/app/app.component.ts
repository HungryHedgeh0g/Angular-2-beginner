import { Component } from '@angular/core';

const todos = [
  { title: "Проснуться", completed: true },
  { title: "Умыться", completed: true },
  { title: "Завтрак", completed: true },
  { title: "Пойти на работу", completed: true },
  { title: "Обед", completed: true },
  { title: "Уйти с работы", completed: true },
  { title: "Ужин", completed: true },
  { title: "Поехать на курсы", completed: true },
  { title: "Поехать домой", completed: false },
  { title: "Съесть яблоко", completed: false },
  { title: "Умыться", completed: false },
  { title: "Заснуть", completed: false }
]

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Angular 2';
  todos = todos;

  toggle(todo: any) {
    todo.completed = !todo.completed;
  }

  delete(todo: any) {
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
