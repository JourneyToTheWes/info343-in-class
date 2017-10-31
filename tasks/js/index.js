// @ts-check
"use strict";

let state = {
    tasks: [
        {title: "Create tasks as li elements"},
        {title: "Render the tasks as a unordered list on the page"},
        {title: "Learn Event Handling"},
        {title: "Add new task to the list object and then display newly added item"},
        {title: "Add functionality to mark items as done"},
        {title: "Implement the purge feature to clear out completed tasks"}
    ]
};

//TODO: let's implement a dynamic task list!
function renderTask(task) {
    // create teh li
    let li = document.createElement("li");
    // set the content of that li
    li.textContent = task.title;

    // If the task has a DONE key, then add a CSS class
    if (task.done) {
        li.classList.add("done");
    }

    li.addEventListener("click", function() {
        task.done = !task.done;
        //toggle the done class
        li.classList.toggle("done");
        console.log(state);
    });

    return li;
}

function render(state) {
    // select teh ul element from the page
    let ul = document.querySelector(".tasks");
    // clear all the content of my ul
    ul.textContent = "";

    // iterate through the list of tasks
    for (let i = 0; i < state.tasks.length; i++) {
        ul.appendChild(renderTask(state.tasks[i]));
    }
}

render(state);

//select the form element
document.querySelector("#new-task-form")
    //new event listener for submission
    .addEventListener("submit", function(evt) {
        //prevent the defualt action of my form
        evt.preventDefault();

        let input = /** @type {HTMLInputElement} */ document.querySelector("#new-task-title");

        //console.log(input);
        let task = {title: input.value};
        //console.log(task);
        state.tasks.push(task);

        console.log(state.tasks);
        input.value = "";
        render(state);
    });

document.querySelector("#purge")
    .addEventListener("click", function() {
        state.tasks = state.tasks.filter(function(task) {
            return !task.done;
        }) 
        document.querySelector("h1").classList.toggle("purged");
        render(state);
    });
