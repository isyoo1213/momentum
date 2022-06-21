const todoForm = document.querySelector(".todos");
const todoInput = document.querySelector(".todos .todo-input");
const todoList = document.querySelector(".todo-list");
const TODOS_KEY = "todos";

let todos = [];


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todos.push(newTodo);
    todoInput.value = "";
    saveTodos();
    paintTodos(newTodo);
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
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
// Localstorage에서 Array로 가져온 item들 확인하는 방법1
// function sayHello(item){
//     console.log("this is turn of", item);
// }

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos);
    // console.log(savedTodos);
    // console.log(parsedTodos);
    // 방법1
    // parsedTodos.forEach(sayHello);
    //방법2
    // parsedTodos.forEach((item)=>console.log("this is turn of ", item));
    todos = parsedTodos;
    parsedTodos.forEach((item)=>paintTodos(item));
}