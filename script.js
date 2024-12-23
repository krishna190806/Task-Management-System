const tasks = [];

// Function to add a task
const addTask = () => {
  const title = document.getElementById('task-title').value;
  const status = document.getElementById('task-status').value;
  const priority = parseInt(document.getElementById('task-priority').value, 10);

  if (title && priority >= 1 && priority <= 5) {
    tasks.push({ title, status, priority });
    displayTasks(tasks);
    document.getElementById('task-title').value = '';
    document.getElementById('task-priority').value = '';
  } else {
    alert('Please enter a valid title and priority (1-5).');
  }
};

// Function to display tasks
const displayTasks = (taskArray) => {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  taskArray.forEach(task => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    listItem.innerHTML = `
      <span>Task:</span> ${task.title} <br>
      <span>Status:</span> ${task.status} <br>
      <span>Priority:</span> ${task.priority}
    `;
    taskList.appendChild(listItem);
  });
};

// Function to filter tasks by status
const filterByStatus = (status) => {
  const filteredTasks = tasks.filter(task => task.status === status);
  displayTasks(filteredTasks);
};

// Function to find the first high-priority task
const findHighPriorityTask = () => {
  const highPriorityTask = tasks.find(task => task.priority === 5);
  if (highPriorityTask) {
    alert(`High Priority Task Found: ${highPriorityTask.title}`);
  } else {
    alert('No High Priority Task Found.');
  }
};

// Event listeners
document.getElementById('add-task').addEventListener('click', addTask);
