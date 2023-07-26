const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function completeTask(button) {
  const taskSpan = button.previousElementSibling;
  taskSpan.classList.toggle('completed');
}

function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
