// Select required DOM elements
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

// Handle form submit event
todoForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload

  const todoText = todoInput.value.trim(); // Remove whitespace
  if (todoText === '') {
    alert('할 일을 입력하세요.');
    todoInput.focus();
    return;
  }

  addTodo(todoText); // Add a new list item
  todoInput.value = ''; // Clear input
  todoInput.focus(); // Focus input for next entry
});

// Create and append a new todo item
function addTodo(todoText) {
  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';

  const todoTextSpan = document.createElement('span');
  todoTextSpan.textContent = todoText; // Display text safely

  const actionBox = document.createElement('div');
  actionBox.className = 'todo-actions';

  const doneButton = document.createElement('button');
  doneButton.type = 'button';
  doneButton.className = 'done-button';
  doneButton.textContent = '완료';

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete-button';
  deleteButton.textContent = '삭제';

  doneButton.addEventListener('click', function () {
    todoItem.classList.toggle('done'); // Toggle completion state
  });

  deleteButton.addEventListener('click', function () {
    todoItem.remove(); // Remove item from list
  });

  actionBox.append(doneButton, deleteButton);
  todoItem.append(todoTextSpan, actionBox);
  todoList.appendChild(todoItem); // Render item in list
}
