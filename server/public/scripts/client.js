$(function () {
    console.log('jq and js');
    getTasks();
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

function renderList(list) {
    $("#list-body").empty();

    console.log("in list history", list);

    for (const item of list) {
      $("#list-body").append(`
    <tr> 
    <td> ${item.task}</td>
    <td> ${item.complete} </td>
    <td> ${item.timeCompleted} </td>
    <td> <button data-id="${item.id}" class="delete-btn"> DELETE </button></td>
    <td> <button data-id="${item.id}" class="edit-btn"> EDIT </button></td>
    </tr>`);
    }
}