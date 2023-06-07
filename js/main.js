let tbody = document.getElementById("tbody");
let taskName = document.getElementById("taskName");
let taskPriority = document.getElementById("taskPriority");
let add = document.getElementById("add");
let allPriority = ["Low", "Intermediate", "High"];
let tasks = [];

function write() {
    counter = 1;
    tbody.innerHTML = "";
    for (const key in tasks) {
        tbody.innerHTML += ` <tr>
                              <th>${counter}</th>
                              <td>${tasks[key].getName()}</td>
                              <td> ${allPriority[tasks[key].getPriorityValue()]}</td>
                              <td>
                              <div class = "d-flex">
                                 <i class="bi bi-trash fs-4  text-danger delete" data-id=${key} onclick="deleteTask(${key},this)"></i>
                                 <i class="bi bi-pencil-square fs-4 ms-1 text-primary edit" data-id=${key} onclick="editTask(${key},this)"></i>
                                 <button class="btn btn-primary hidden" onclick = "updateTask(${key},this)">Save</button>
                                 <button class="btn btn-danger ms-1 hidden" onclick="cancelEdit()">Cancel</button>
                                 </div>
                              </td>
                          </tr> `;
        counter++;
    }
}
// window.onload.write();
window.onload = function () {
    tasks.sort((a, b) =>
        a.priorityValue < b.priorityValue ? 1 : b.priorityValue < a.priorityValue ? -1 : 0
    );
    write();
};
function addNew() {
    if (taskName.value == "" || taskPriority.value == "") {
        alert("Invalid Task Data!!")
        return;
    }
 
    let newTask = new Task(taskName.value,Number(taskPriority.value));
    tasks.push(newTask);
    taskName.value = "";
    taskPriority.value = "";
    tasks.sort((a, b) =>
        a.getPriorityValue() < b.getPriorityValue() ? 1 : b.getPriorityValue() < a.getPriorityValue() ? -1 : 0
    );
    write();
    
}
add.onclick = addNew;
// add.addEventListener("click", addNew);

//console.log( document.getElementsByClassName('delete'));
function deleteTask(key, el) {
    tasks.splice(key, 1);
    write();
}
let editTask = function (key, el) {
    let deleteBtn = el.previousElementSibling;
    let saveBtn = el.nextElementSibling;
    let cancelBtn = saveBtn.nextElementSibling;
    let priorityTd = el.parentElement.parentElement.previousElementSibling;
    let nameTd = priorityTd.previousElementSibling;
   
    el.classList.add('hidden');    
    deleteBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
    cancelBtn.classList.remove('hidden');
    nameTd.innerHTML = `<input class="form-control" value="${tasks[key].getName()}" />`

    let options = ''
    for (i in allPriority) {

        options += `<option ${i == tasks[key].getPriorityValue() ? 'selected' : ''} value="${i}">${allPriority[i]}</option>`
    }

    priorityTd.innerHTML = `<select class="form-select">${options}</select>`
}


let cancelEdit = function () {
    write();
}
let updateTask = function (key, el) {
    // let deleteBtn = el.previousElementSibling;
    // let saveBtn = el.nextElementSibling;
    // let cancelBtn = saveBtn.nextElementSibling;
    let taskPriority = el.parentElement.parentElement.previousElementSibling.firstElementChild;
    let taskName = el.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
    if (taskName.value == "" || taskPriority.value == "") {
        alert("Invalid Task Data!!")
        return;
    }
    tasks[key].setName(taskName.value);
    tasks[key].setPriorityValue (taskPriority.value);
    tasks.sort((a, b) =>
        a.getPriorityValue() < b.getPriorityValue() ? 1 : b.getPriorityValue() < a.getPriorityValue() ? -1 : 0
    );
    write();
}
 function sortByName(){
    tasks.sort((a, b) =>
        a.getName().toLowerCase() > b.getName().toLowerCase() ? 1 : b.getName().toLowerCase() > a.getName().toLowerCase() ? -1 : 0
    );
    write();
}
function sortByPriority (){
    tasks.sort((a, b) =>
    a.getPriorityValue() < b.getPriorityValue() ? 1 : b.getPriorityValue() < a.getPriorityValue() ? -1 : 0
);
    write();
}