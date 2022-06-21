const todoForm = document.querySelector(".todos");
const todoInput = document.querySelector(".todos .todo-input");
const todoList = document.querySelector(".todo-list");
const TODOS_KEY = "todos";

let todos = [];


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    if(newTodoObj.text != ""){
        todos.push(newTodoObj);
        paintTodos(newTodoObj);
        saveTodos();
    }
    
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    // console.log(event.target.parentElement.innerText);
    const deleteLi = event.target.parentElement;
    todos = todos.filter((todo) => todo.id != parseInt(deleteLi.id));
    deleteLi.remove();
    saveTodos();
}

function paintTodos(newTodoObj){
    if(newTodoObj.text == ""){
    } else {
        const li = document.createElement("li");
        li.id = newTodoObj.id;
        const strong = document.createElement("strong");
        strong.innerText = newTodoObj.text;
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