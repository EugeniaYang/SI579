
task_list = document.getElementById("task_list");
addTask("Learn to wrap gifts", 1639944400000);
addTask("Buy milk");
const add_btn = document.getElementById("add_task");

// Execute a function when the user releases a key on the keyboard
document.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    add_btn.click();
    console.log('keydown')
  }
});


add_btn.addEventListener("click", () => {
    console.log("button clicked");
    dueTime = dateAndTimeToTimestamp(document.getElementById("duedate_input"),document.getElementById("duetime_input"));
    addTask(document.getElementById("task_description_input").value, dueTime)
    document.getElementById("task_description_input").value=''
}
);

function addTask(description, dueTime){
    console.log(description, dueTime)
    // add a new item to the ul#task_list element
    const new_task = document.createElement("li");
    if (dueTime){
        const d = new Date();
        d.setTime(dueTime)
        new_task.innerHTML += description + "<span class=\"due\"> due " + d.toLocaleString() 
    }
    else {
        new_task.innerHTML += description
    }
    const done_btn = document.createElement("button")
    done_btn.setAttribute("class", "btn btn-sm btn-outline-danger done")
    done_btn.setAttribute("type", "button")
    done_btn.textContent = "Done"
    done_btn.addEventListener('click', e => {
        // Whe the link is clicked, call preventDefault,
        // effectively disabling the link.
        e.path[1].remove()
    })
    new_task.appendChild(done_btn)
    task_list.appendChild(new_task)
}


function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}
