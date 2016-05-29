//******** User List Entry and Function *************

var taskInput = document.getElementById("new-place"); //new-task
var addButton = document.getElementById("addButton"); //Add Button
var listHolder = document.getElementById("restList"); //UL List

addButton.onclick = function (){
  var listItem = document.createElement("li");
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete";//Adds class for later use
  deleteButton.innerText = "X";
  var taskInput = document.getElementById("new-place"); //new-task

    listItem.innerText = taskInput.value; //Adds user input text to li
    listItem.appendChild(deleteButton);//Adds delete button to each li
    listHolder.appendChild(listItem);//Adds li to ul
    taskInput.value = ""; //resets User Input back to ""

    deleteButton.onclick = function(){ //Delete "this" li element
      var item = this.parentNode;
      var ul = item.parentNode;
      ul.removeChild(item);
    }
};

//******** Create Pie Chart from li elements *************
