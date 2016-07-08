//******** User List Entry and Function *************
var addButton = document.getElementById("addButton"); //Add Button
var listHolder = document.getElementById("restList"); //UL List
var taskInput = document.getElementById("new-place"); //new-task
var circleArray = [];
var degree = 0;
var sliceArray = [];

//Adds new item when "enter" pressed.
taskInput.addEventListener("keyup",function(event){
  event.preventDefault();
  if (event.keyCode == 13){addButton.click();}
});

addButton.onclick = function (){
//******** Creates <li> of <ol> on addButton ****
    var listItem = document.createElement("li");
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete";//Adds class for CSS use
    deleteButton.innerText = "X";

    listItem.innerText = taskInput.value; //Adds user input text to li
    listItem.appendChild(deleteButton);//Adds delete button to each li
    listHolder.appendChild(listItem);//Adds li to ul

//******** Creates <li> inside #circle <ul> on addButton ****
    var sliceHolder = document.getElementById("circle"); // circle UL list
    var sliceItem = document.createElement("li");
    sliceHolder.appendChild(sliceItem);
    sliceItem.innerHTML = taskInput.value;


    //Random Pastel RGB Background for slice Items
    var RGB = 'rgb(' + (Math.floor(Math.random() * 157)+100) + ',' + (Math.floor(Math.random() * 157)+100) + ',' + (Math.floor(Math.random() * 157)+100) + ')';
    // console.log(RGB);
    sliceItem.style.backgroundColor = RGB;

//Adds to Array for future funciton calls
    circleArray.push(listItem); //Using list item enables deleteButton option
    sliceArray.push(sliceItem);

//Task Input Focus and Reset
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
      var x = sliceArray.indexOf(item);
      sliceArray.splice(i,1);
      //Global Degree is updated based on deleted Array Length
          if(circleArray.length>0){
              degree = 360/circleArray.length;
            }else(degree=0)
      //Deletes and reEvaluates degree rotation for list elements
            for(var i=0; i<sliceArray.length; i++){
              var nth = sliceArray[i];
              nth.style.webkitTransform = "rotateZ("+ degree*i +"deg) translate(200px)";
            }
      }//End deleteButton function


//******** Global Degree is updated based on new Array Length ****
          if(circleArray.length>0){
            degree = 360/circleArray.length;
            }

//sets Degree of rotation forEach list item.
      for(var i=0; i<sliceArray.length; i++){
        var nth = sliceArray[i];
        nth.style.webkitTransform = "rotateZ("+ degree*i +"deg) translate(200px)";
//If too many list items... change size to keep from overlapping.
        if(sliceArray.length > 14){
          var nth = sliceArray[i];
          nth.style.width = "40px";
          nth.style.height = "40px";
          nth.style.margin = "-20px";
        }

        if(sliceArray.length > 34){
          var nth = sliceArray[i];
          nth.style.width = "25px";
          nth.style.height = "25px";
          nth.style.margin = "-12px";
        }
      }

};//Ends addButton.onclick funciton



//******** Create Pie Chart from li elements *************
//Use circleArray now for objects below??
//new Array from first with only text ??
//Varibles unusable outside of Add Funciton.
//Take out and use circleArray
// Append an li to the circle UL for graphic use.
var circleUL = document.getElementById("circle");
var circleLI = document.getElementById("circle").getElementsByTagName("li");
//Use a forEach loop to append Degree


// sliceArray.forEach(function(index){
//   index.style.transform = "rotateZ(" + degree*index + "deg), rotateX("+ degree*index +"deg)";
//   // console.log(index);
//   // console.log(degree);
//   });



//******** Spin Button Animation *************
var spinButton = document.getElementById("spin");
      //Animation Sequence
      var tl = new TimelineMax({paused:true});
      tl.to(spinButton ,2,{rotation:2160});
      tl.to(spinButton,1,{scale:.5}, "-=2");
      tl.to(spinButton,1,{scale:1}, "-=1");
      // tl.to(spinButton,1,{rotation:answer});

      //var random# between 1 and list length
      // answer = random# * degrees
      // tl.to rotateX:answer

spinButton.onclick = function(){
  var randomItemIndex = (Math.floor(Math.random() * circleArray.length));
  var answerD = degree * randomItemIndex;

  var x = randomItemIndex;
  var y = sliceArray[x];
  var z = y.innerHTML;

  var answerDiv = document.getElementById("answer");
  if (z == "") {answerDiv.innerHTML = "'Blank Entry'";}
  else{answerDiv.innerHTML = z;}

  function displayAnswer(){
    answerDiv.style.opacity = ".9";
    answerDiv.style.width = "100vw";
    answerDiv.style.height = "100vh";

    answerDiv.onclick = function(){
      answerDiv.style.opacity = "0";
      answerDiv.style.width = "0px";
      answerDiv.style.height = "0px";
    };
  }

  //Animation Sequence
  var tl = new TimelineMax({paused:true,onComplete:displayAnswer});
  tl.to(spinButton ,2,{rotation:2160});
  tl.to(spinButton,1,{scale:.5}, "-=2");
  tl.to(spinButton,1,{scale:1}, "-=1");
  tl.to(spinButton,1,{rotation:answerD},"-=1");
  tl.play(0);

  answerD = 0;
  console.log(z)
  return z;
};
