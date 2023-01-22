$(function () {
    console.log('jq and js');
    getTasks();
    $('#new-task-btn').on('click', newTask);
});

function getTasks() {
    console.log("in getTasks");
    // ajax call to server to get koalas
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
      complete: $("#complete-input").val(),
    };
  
    $("#task-input").val('');
    $("#complete-input").val('');

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
    <td> <button data-id="${item.id}" class="edit-btn"> EDIT </button></td>
    </tr>`);
    }
}