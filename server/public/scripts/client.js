$(function () {
    console.log('jq and js');
    getTasks();
    $('#new-task-btn').on('click', newTask);
    $('#list-body').on('click', '.delete-btn', deleteTask);
    $('#list-body').on('click', '.edit-btn', markComplete);
});

function getTasks() {
    console.log("in getTasks");
    // ajax call to server to get tasks
    $.ajax({
        method: "GET",
        url: "list/gettasks",
    }).then(function (response) {
        renderList(response);
    });
}

function newTask(task) {
    console.log("in newTask", task);
    let taskToSend = {
        task: $("#task-input").val(),
    };

    $("#task-input").val('');

    $.ajax({
        type: "POST",
        url: "list/newtask",
        data: taskToSend,
    })
        .then(function (response) {
            console.log("Response from server.", response);
            getTasks();
        })
        .catch(function (error) {
            console.log("Error in POST", error);
            alert("Unable to add task at this time. Please try again later.");
        });
}

function renderList(list) {
    $("#list-body").empty();

    console.log("in list history", list);

    for (const item of list) {
        $("#list-body").append(`
    <tr> 
    <td> ${item.task}</td>
    <td> ${item.complete} </td>
    <td> <button data-id="${item.id}" class="delete-btn"> DELETE </button></td>
    <td> <button data-id="${item.id}" class="edit-btn"> COMPLETE </button></td>
    </tr>`);
    }
}

function deleteTask(event) {
    let id = $(event.target).data('id');
    console.log('our working ID for DELETE is:', id);
    $.ajax({
        method: 'DELETE',
        url: `/list/${id}`
    }).then(() => {
        getTasks();
    }).catch((error) => {
        console.log('error in deleting:', error);
    });
}

function markComplete(event) {
    let id = $(event.target).data('id');
    console.log('our working Id for PUT is:', id);
    $.ajax({ url: `/list/${id}`, method: `PUT` }) // make the http request
        .then(() => getTasks())
        .catch(err => alert('ERROR marking task as complete'));
}