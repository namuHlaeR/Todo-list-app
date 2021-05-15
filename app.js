// Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');

// Event listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOptions.addEventListener('click', filterTodo);
// Functions

function addTodo(event){
    // Prevent from refresh
    event.preventDefault();
    // Todo DIV 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create an LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check btn
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('completed-btn');
    todoDiv.appendChild(completedBtn);
    // Delete btn
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.classList.add('trash-btn');
    todoDiv.appendChild(trash);
    // Apend to list
    todoList.appendChild(todoDiv);
    // Clear input value
    todoInput.value = '';
    // Testing
    console.log('Hey')
}
// Delete & Check btn's
function deleteCheck(e){
    const item = e.target;
    // Delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    // Check item
    if(item.classList[0] === 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
};

// Filter
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e,target.value)
    });
}