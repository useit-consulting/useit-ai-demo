// Todo List Component
class TodoList {
  constructor() {
    this.todos = [];
    this.form = document.getElementById("todo-form");
    this.input = document.getElementById("todo-input");
    this.list = document.querySelector(".todo-list");
    this.init();
  }

  init() {
    // Add event listeners
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo(this.input.value);
    });
  }

  addTodo(text) {
    if (!text.trim()) return;

    const todo = {
      id: Date.now(),
      text: text.trim(),
    };

    this.todos.push(todo);
    this.renderTodos();
    this.input.value = "";
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.renderTodos();
  }

  renderTodos() {
    this.list.innerHTML = this.todos
      .map(
        (todo) => `
      <li class="todo-item">
        <span>${todo.text}</span>
        <button onclick="todoList.removeTodo(${todo.id})" aria-label="Remove ${todo.text}">Delete</button>
      </li>
    `
      )
      .join("");
  }
}

// Initialize the todo list
const todoList = new TodoList();
