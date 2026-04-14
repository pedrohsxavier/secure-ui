Auth.requireAuth();

const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

let tasks = [];

const API_URL = 'http://localhost:3000/tasks';

function getHeaders() {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Auth.getToken()}`
    };
}

async function loadTasks() {
    const response = await fetch(API_URL, {
        headers: getHeaders()
    });

    tasks = await response.json();
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = task.text;

        if (task.done) {
            span.style.textDecoration = 'line-through';
        }

        span.onclick = () => toggleTask(task.id);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.onclick = () => removeTask(task.id);

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

async function addTask() {
    const tkValue = taskInput.value.trim();

    if (!tkValue) return;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            title: tkValue
        })
    });

    const newTask = await response.json();

    tasks.push(newTask);

    taskInput.value = '';
    renderTasks();
}

async function removeTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
    });

    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

async function toggleTask(id) {
    const task = tasks.find(t => t.id === id);

    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({
            done: !task.done
        })
    });

    const updatedTask = await rasponse.json();

    tasks = tasks.map(t => t.id === id ? updatedTask : t);
    renderTasks();
}

document.getElementById('addTask').addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

loadTasks();