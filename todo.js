function Task() {
    let task = document.getElementById("new_task").value;

    if (task) {
        let taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        let taskText = document.createElement('span');
        taskText.className = 'text-content';
        taskText.textContent = task;

        let icon = document.createElement("i");
        icon.className = 'fas fa-check-circle icon';

        let cross = document.createElement("span");
        cross.className = "delete-button";
        cross.innerHTML = "\u00d7";

        taskItem.appendChild(icon);
        taskItem.appendChild(taskText);
        taskItem.appendChild(cross);

        document.getElementById("task_list").appendChild(taskItem);

        cross.addEventListener("click", function() {
            deleteTask(taskItem)
        });

        taskText.addEventListener("click", function() {
            completeTask(taskText)
        })

        taskText.addEventListener("click", function(){
            greenTick(icon)
        })

        document.getElementById("new_task").value = "";
    }
}
function deleteTask(taskItem) {
    taskItem.remove();
}

function completeTask(taskText) {
    if (taskText) {
        taskText.style.textDecoration = "line-through";
    }
}

function greenTick(icon) {
    icon.style.color = "green"
}

document.getElementById("add_task_button").addEventListener("click", Task);

