const todoList = [];

function renderTodoList() {
  let todoListHTML  = '';
  for (let i = 0; i < todoList.length; i ++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;;
    todoListHTML += html;
  } 
  
  const arrayElements = document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
}


console.log(todoListHTML);

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
  renderTodoList()
}
