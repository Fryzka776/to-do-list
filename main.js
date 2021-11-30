function date()
{
    var today = new Date();

    var day = today.getDate();
    if(day<10) day = "0" + day;
    var month = today.getMonth() + 1;
    if(month<10) month = "0" + month;
    var year = today.getFullYear();

    document.getElementById("date").innerHTML = `${day}. ${month}. ${year} `;
}

const form = document.querySelector('form');
const ulToDo = document.querySelector('#toDo');
const ulDone = document.querySelector('#done');
const liItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
const newListBtn = document.querySelector('button');

const addTask = (e) => {
    e.preventDefault();
    const newTask = input.value;
    if(newTask !== ""){
        const task = document.createElement('li');
        task.className = 'task';
        task.innerHTML = newTask + "<button class='delete'>Delete</button> <button class='done'>Done</button>";
        ulToDo.appendChild(task);
        input.value = "";
        task.style.color = "red";
        task.querySelector('.delete').addEventListener('click', deleteTask);
        task.querySelector('.done').addEventListener('click', doneTask);
    }
}

const deleteTask = (e) => {
    e.target.parentNode.remove();
}

const doneTask = (e) => {
    const doneTask = e.target.parentNode.innerHTML;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = doneTask;
    ulDone.appendChild(task);
    e.target.parentNode.remove();
    task.querySelector('.done').remove();
    task.style.color = "green";
    task.querySelector('.delete').addEventListener('click', deleteTask);
}

const refreshList = () => {
    const toDo = document.getElementById('toDo');
    toDo.innerHTML = "";
    const done = document.getElementById('done');
    done.innerHTML = "";
}

form.addEventListener('click', addTask);
newListBtn.addEventListener('click', refreshList);