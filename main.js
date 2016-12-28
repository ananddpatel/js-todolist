/*
1. clicking button adds task to TODO area
    - newer adds to the top
2. 2 buttons within each list at the right side
    - done, delete
3. 1 button on the right side
    -  edit
4. tasks that are done get sent to the DONE area
    - color changes to a green color indicating its done
*/

var button = document.getElementById('mybutton');
var taskList = document.querySelector('#todo');
var inputBox = document.querySelector('#inputbox')
var listGroup = document.querySelectorAll(".list-group")[0]

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

    var text = document.createElement("div");
    text.setAttribute("class", "tasktext col-xs-9");
    text.innerHTML = txt;

    var doneButton = document.createElement("i");
    doneButton.setAttribute("class", "fa fa-check fa-lg done col-xs-0.5");

    var deleteButton = document.createElement("i");
    deleteButton.setAttribute("class", "fa fa-trash fa-lg delete col-xs-0.5");

    row.appendChild(editButton);
    row.appendChild(text);
    row.appendChild(doneButton);
    row.appendChild(deleteButton);
    liItem.appendChild(row)
    listGroup.insertBefore(liItem, listGroup.childNodes[0]);
}

function activate() {
//	this.classList.add('active')
}



















