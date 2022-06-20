const todoForm = document.querySelector(".todos");
const todoInput = document.querySelector(".todos .todo-input");
const todoList = document.querySelector(".todos .todo-list");

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodos(newTodo);
}

function paintTodos(newTodo){
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    const button = document.createElement("button");
    strong.innerText = newTodo;
    button.innerText = "❌";
    li.appendChild(strong);
    li.appendChild(button);
    todoList.appendChild(li);
}
console.log(todoForm);
todoForm.addEventListener("submit", handleTodoSubmit);