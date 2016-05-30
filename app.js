//******** User List Entry and Function *************
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

    // Append an li to the circle UL for graphic use.
    var sliceHolder = document.getElementById("circle"); // circle UL list
    var sliceItem = document.createElement("li");
    sliceItem.innerText = taskInput.value;
    sliceHolder.appendChild(sliceItem);

    taskInput.value = ""; //resets User Input back to ""

    deleteButton.onclick = function(){ //Delete "this" li element
      var item = this.parentNode;
      var ul = item.parentNode;
      ul.removeChild(item);
      sliceHolder.removeChild(sliceItem);
    }
};

//******** Create Pie Chart from li elements *************
