array = []

const buttonAddTask = document.getElementById("add-task")
const inputTask = document.getElementById("input-task")
const tasks = document.getElementById("tasks")
const inputTotal = document.getElementById("total")
const inputRealizadas = document.getElementById("realizadas")

function updateState() {
    var taskHTML = ""
    if (array.length === 0) {
        tasks.innerHTML = ""
        return
    }
    array.forEach((task, index) => {
        taskHTML += `
        <tr>
            <td>${index}</td>
            <td>${task.description}</td>
            <td> <input type="checkbox" onclick="completarTask(${index})" ${task.estado ? "checked" : " "}> </td>
            <td> <a class="btn btn-danger" onclick="deleteTask(${index})">Delete</a></td>
        </tr>
        `
    });

    inputTotal.innerText = array.length
    filtroArray = array.filter(val => val.estado === true)
    inputRealizadas.innerText = filtroArray.length

    tasks.innerHTML = taskHTML
}



function completarTask(id) {
    array[id].estado = array[id].estado ? false : true
    updateState()
}

function deleteTask(id) {
    array.splice(id, 1)
    updateState()
}

function addTask() {
    message = inputTask.value
    array.push({
        description: message,
        estado: false
    })
    updateState()
}

buttonAddTask.addEventListener("click", addTask)