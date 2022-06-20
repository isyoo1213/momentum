const todoForm = document.querySelector(".todos");
const todoInput = document.querySelector(".todos .todo-input");
const todoList = document.querySelector(".todo-list");

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodos(newTodo);
}

function deleteTodo(event){
    // console.log(event.target.parentElement.innerText);
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
}

function paintTodos(newTodo){
    if(newTodo == ""){
    } else {
        const li = document.createElement("li");
        const strong = document.createElement("strong");
        strong.innerText = newTodo;
        const button = document.createElement("button");
        button.innerText = "❌";
        button.addEventListener("click", deleteTodo);
        li.appendChild(strong);
        li.appendChild(button);
        todoList.appendChild(li);
    }

}
todoForm.addEventListener("submit", handleTodoSubmit);