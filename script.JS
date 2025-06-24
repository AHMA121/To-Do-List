let form = document.getElementById("todo-form");
let input = document.getElementById("todo-input");
let list = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
displayTasks();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let task = input.value.trim();
    if (task === "") return;

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    displayTasks();
});

function displayTasks () {
    list.innerHTML = "";

    tasks.forEach( function (task, index) {
        let li = document.createElement("li");
        li.textContent = task;

        li.addEventListener("click", function () {
            li.classList.toggle("done");
        })

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent =  "❌";
        deleteBtn.style.marginLeft="10px";
        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}