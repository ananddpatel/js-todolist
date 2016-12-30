/*
1. DONE clicking button adds task to TODO area
    - newer adds to the top
2. DONE 2 buttons within each list at the right side
    - done, delete
3. DONE 1 button on the right side
    -  edit
4. DONE tasks that are done get sent to the DONE area
    - color changes to a green color indicating its done
*/

var button = document.getElementById('mybutton');
var taskList = document.querySelector('#todo');
var inputBox = document.querySelector('#inputbox')
var todoListGroup = document.querySelectorAll(".todo-list-group")[0]
var doneListGroup = document.querySelectorAll(".done-list-group")[0]

button.addEventListener('click', function() {
    var value = inputBox.value;
    if (value) {createItem(value)};
});

function createItem(txt) {
    var liItem = document.createElement("div");
    liItem.setAttribute("class", "list-group-item");

    var row = document.createElement("div");
    row.setAttribute("class", "row")

    var editButton = document.createElement("i");
    editButton.setAttribute("class", "fa fa-pencil fa-lg edit col-xs-0.5");
    editButton.addEventListener("click", function() {editTask(liItem)});

    var text = document.createElement("div");
    text.setAttribute("class", "tasktext col-xs-9");
    text.innerHTML = txt;

    var doneButton = document.createElement("i");
    doneButton.setAttribute("class", "fa fa-check fa-lg done col-xs-0.5");
    doneButton.addEventListener("click", function() {doneTask(liItem)});

    var deleteButton = document.createElement("i");
    deleteButton.setAttribute("class", "fa fa-trash fa-lg delete col-xs-0.5");
    deleteButton.addEventListener("click", function() {deleteTask(liItem)});

    row.appendChild(editButton);
    row.appendChild(text);
    row.appendChild(doneButton);
    row.appendChild(deleteButton);
    liItem.appendChild(row)
    todoListGroup.insertBefore(liItem, todoListGroup.childNodes[0]);
}

function deleteTask(liGroupItem) {
    var parent = liGroupItem.parentElement;
    parent.removeChild(liGroupItem);
    
}

function editTask(liGroupItem) {
    var parentRow = liGroupItem.getElementsByClassName("row")[0];

    var textDiv = liGroupItem.getElementsByClassName("tasktext")[0];
    var text = textDiv.innerHTML;

    var editInput = document.createElement("input");
    editInput.setAttribute("id", "editing");
    editInput.setAttribute("class", "form-control col-md-4");
    editInput.value = text;
    editInput.addEventListener("blur", function() {
        var newText = editInput.value;
        textDiv.innerHTML = newText;
        parentRow.replaceChild(textDiv, editInput)
    });

    parentRow.replaceChild(editInput, textDiv);  
}

function doneTask(liGroupItem) {
    todoListGroup.removeChild(liGroupItem);
    doneListGroup.insertBefore(liGroupItem, doneListGroup.childNodes[0]);
    liGroupItem.style.backgroundColor = "#82e282";
    var removeDoneButton = liGroupItem.querySelector(".done").remove();
}







