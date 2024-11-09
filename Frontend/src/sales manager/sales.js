const tasks = [];
const labours = [];


function addTask() {
    const taskName = document.getElementById('taskInput').value;
    if (taskName) {
        tasks.push(taskName);
        document.getElementById('taskInput').value = '';
        renderTasks();
        const taskModal = bootstrap.Modal.getInstance(document.getElementById('taskModal'));
        taskModal.hide();
    }
}


function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = task;
        taskList.appendChild(li);
    });
}

function addLabour() {
    const labourName = document.getElementById('labourInput').value;
    if (labourName) {
        labours.push(labourName);
        document.getElementById('labourInput').value = '';
        renderLabours();
        const labourModal = bootstrap.Modal.getInstance(document.getElementById('labourModal'));
        labourModal.hide();
    }
}


function renderLabours() {
    const labourList = document.getElementById('labourList');
    labourList.innerHTML = '';
    labours.forEach((labour, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = labour;
        labourList.appendChild(li);
    });
}


document.getElementById('taskManagementLink').addEventListener('click', () => {
    showSection('taskManagementSection');
});

document.getElementById('labourManagementLink').addEventListener('click', () => {
    showSection('labourManagementSection');
});

document.getElementById('reportsLink').addEventListener('click', () => {
    showSection('reportsSection');
});

function showSection(sectionId) {
    document.getElementById('taskManagementSection').classList.add('hidden');
    document.getElementById('labourManagementSection').classList.add('hidden');
    document.getElementById('reportsSection').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}