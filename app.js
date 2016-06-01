//******** User List Entry and Function *************
var addButton = document.getElementById("addButton"); //Add Button
var listHolder = document.getElementById("restList"); //UL List
var taskInput = document.getElementById("new-place"); //new-task
var circleArray = [];
var degree = 0;

addButton.onclick = function (){
  var listItem = document.createElement("li");
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete";//Adds class for CSS use
  deleteButton.innerText = "X";

    listItem.innerText = taskInput.value; //Adds user input text to li
    listItem.appendChild(deleteButton);//Adds delete button to each li
    listHolder.appendChild(listItem);//Adds li to ul

    //circleArray is created by task input list.
    // circleArray.push(taskInput.value);
    circleArray.push(listItem); //Using list item enables deleteButton option

    taskInput.value = ""; //resets User Input back to ""
    taskInput.focus(); //places focus back to input field

//******** Delete Button  *************

    deleteButton.onclick = function(){ //Delete "this" li element
      var item = this.parentNode;
      var ul = item.parentNode;
      var i = circleArray.indexOf(item);
      ul.removeChild(item);
      sliceHolder.removeChild(sliceItem);
      circleArray.splice(i, 1);
      //******** Global Degree is updated based on deleted Array Length ***
          if(circleArray.length>0){
              degree = 360/circleArray.length;
            }else(degree=0)
    }

    //******** Global Degree is updated based on new Array Length ****

    if(circleArray.length>0){
      degree = 360/circleArray.length;
      }

//******** Create Pie Chart from li elements *************

        //Use circleArray now for objects below??
        //new Array from first with only text ??
        //Varibles unusable outside of Add Funciton.
        //Take out and use circleArray
        // Append an li to the circle UL for graphic use.
        var sliceHolder = document.getElementById("circle"); // circle UL list
        var sliceItem = document.createElement("li");
        sliceItem.innerText = taskInput.value;
        sliceHolder.appendChild(sliceItem);

        //Use a forEach loop to append Degree

};//Ends addButton.onclick funciton


//******** Spin Button Animation *************
var spinButton = document.getElementById("spin");
      //Animation Sequence
      var tl = new TimelineMax({paused:true});
      tl.to(spinButton ,2,{rotation:2160});
      tl.to(spinButton,1,{scale:.5}, "-=2");
      tl.to(spinButton,1,{scale:1.3}, "-=1");
      //var random# between 1 and list length
      // answer = random# * degrees
      // tl.to rotateX:answer

spinButton.onclick = function(){
  tl.play(0);//plays from start
  //Overlay body with lightbox.
  //Show Answer in Overlay.
  console.log(degree);
};
