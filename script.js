// console.log("hi!");

let counter = 0;

window.onload = function() {
      addRow();
  };
function addRow() {

  // Get the table body element
  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  
  // create a new row element
  var newRow = table.insertRow();
  
  // create cells for the new row
  //Name
  var cell1 = newRow.insertCell(0);

  //short name
  var cell2 = newRow.insertCell(1);

  //weight input box
  var cell3 = newRow.insertCell(2);

  // the 2 input boxes
  var cell4= newRow.insertCell(3);

  //percentage display
  var cell5 = newRow.insertCell(4);
  cell4.classList.add("percentage-display");
  
  // Add text content to the new cells

  //row counter
  counter++;

  //Name 
  cell1.innerHTML = "Activity " + counter;
  
  //short name
  cell2.innerHTML = "A"+counter;
  
  //weighted box
  var input3 = document.createElement("input");
  
  cell3.appendChild(input3);
  input3.classList.add("classInput3");
  //make div for percentage box
  var containerDiv = document.createElement("div");
  
  //numerator 
  var input4 = document.createElement("input");
  containerDiv.appendChild(input4);
  input4.addEventListener('input',
  displayPercent);
  input4.classList.add("classInput4");


  var slash = document.createElement("span");
  slash.textContent = " / ";
  containerDiv.appendChild(slash);
  
  //denominator
  var input5 = document.createElement("input");
  containerDiv.appendChild(input5);
  input5.addEventListener('input',displayPercent);
  input5.classList.add("classInput5");
  
  cell4.appendChild(containerDiv);
  var percentageDisplay = document.createElement("span");
  percentageDisplay.classList.add("percentage-result");
  cell5.appendChild(percentageDisplay);

}

function displayPercent(event){

  //.target lets us work with the actual element
  var containerDiv = event.target.parentElement;

  // console.log(containerDiv);
  //what is container div rn?
  // it is the container with that makes it flat like the input / input container

  //so we need to go up a level in the tree
  var nextElement = containerDiv.parentElement.parentElement.getElementsByClassName("percentage-result")[0];

  // console.log(nextElement);
  var strInput4 = containerDiv.getElementsByClassName('classInput4')[0].value;
  //put the [0] to actually target smt


  var strInput5 = containerDiv.getElementsByClassName('classInput5')[0].value;

  var fltInput4 = parseFloat(strInput4);
  var fltInput5 = parseFloat(strInput5);
  // console.log((fltInput4/fltInput5)*100);
  nextElement.textContent= ((fltInput4/fltInput5)*100).toFixed(1)+ "%";
  // console.log(fltInput4);
  if (strInput4 === "" || strInput5 === "") {
    nextElement.textContent = "";
    return;
  }
  // if((fltInput4 != NaN) && (fltInput5 != NaN )){
  //   nextElement.textContent= (fltInput4/fltInput5)*100;

  // }else{
  //   nextElement.textContent= ""
  // }


}


function weightedCalc(){
  console.log("weighted button works")
  var inputs4 = document.getElementsByClassName('classInput4');
  var inputs5 = document.getElementsByClassName('classInput5');
  var weighteds = document.getElementsByClassName("classInput3");
  var answersSoFar =[];
  
  for(var i = 0; i<weighteds.length;i++){
    var currentInput4 = parseFloat(inputs4[i].value);
    console.log(currentInput4);
    var currentInput5 = parseFloat(inputs5[i].value);
    console.log(currentInput5);
    var currentWeighted= parseFloat(weighteds[i].value);
    console.log(currentWeighted);
    answersSoFar.push((currentInput4/currentInput5)*currentWeighted);
    console.log(answersSoFar[i]);
  }

  var allAdded = 0;
  var allWeighted = 0;
  for(var i = 0; i<answersSoFar.length;i++){
    
    allAdded += answersSoFar[i];
    allWeighted += parseFloat(weighteds[i].value);
  
  }
  console.log(allAdded);
  console.log(allWeighted);
  console.log(allAdded/allWeighted);
  var finalAnswer =(allAdded/allWeighted)*100
  // "A1: 70/100, weight 10
  // A2: 20/80, weight 5
  // A3: 10/10, weight 3""  
  var display = document.getElementById("calc-display")
  // console.log(answer);

  if((isNaN(finalAnswer)) && isNaN(parseFloat(weighteds[0].value))){
    display.innerHTML = "Please Input Numbers or Weighted";
  }else{
    display.innerHTML = "Weighted = " +(finalAnswer).toFixed(2)+"%"
  }

}

function meanCalc(){
  // console.log("mean calc works!")
  var inputs4 = document.getElementsByClassName('classInput4');
  var inputs5 = document.getElementsByClassName('classInput5');
  var allInputs =[];
  for(var i = 0; i<inputs4.length;i++){
    var input4Value = inputs4[i].value;
    var inputs5Value = inputs5[i].value;
    allInputs.push(input4Value/inputs5Value);
  }
  var sum = 0;
  for(var i =0; i<allInputs.length;i++){
    sum += allInputs[i];
  }
  var answer = sum/inputs4.length
  var display = document.getElementById("calc-display")
  // console.log(answer);

  if(isNaN(answer)){
    display.innerHTML = "Please Input Numbers";
  }else{
    display.innerHTML = "Mean = " +(answer*100).toFixed(2)+"%"
  }

}

