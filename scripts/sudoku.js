
// add your code here
$(document).ready(function() {
  document.getElementById('TableContainer').appendChild(createTable());
  document.getElementById('TableContainer').appendChild(createUndoRow());

  let errorsArray;

  var selected = "";
  var checkCell = "";
  $('td').click(function(){
    if(this.id === "undo9"){
      changeColor(errorsArray);
      document.getElementById(checkCell).innerText = "";
    }else if(this.id[0] === "u"){
      if(selected != ""){
        document.getElementById(selected).style.backgroundColor = "";
        this.style.backgroundColor = "#f2f2f2";
        selected = this.id;
       
      }else if(selected === ""){
        this.style.backgroundColor = "#f2f2f2";
        selected = this.id;
      } 
      console.log(selected);
    }else if(this.id[0] == "c"){
      this.innerText = document.getElementById(selected).innerText; // puts the number in
      // tempSelected = selected; // stores undo btn
    
      // selected = this.id; 
      checkCell = this.id;

      errorsArray = [];
      
      errorsArray = checkrow(checkCell, this.innerText);
     
      errorsArray = errorsArray.concat(checkcolumn(checkCell, this.innerText));
  
      errorsArray = errorsArray.concat(checkBox(checkCell, this.innerText));
      
      errorsArray = [... new Set(errorsArray)];
    }
  });

    
    
  

  function createTable(){
    var tableValue = [-1,1,-1,-1,-1,-1,-1,9,-1,
    -1,-1,4,-1,-1,-1,2,-1,-1,
    -1,-1,8,-1,-1,5,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,3,-1,
    2,-1,-1,-1,4,-1,1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,1,8,-1,-1,6,-1,-1,
    -1,3,-1,-1,-1,-1,-1,8,-1,
    -1,-1,6,-1,-1,-1,-1,-1,-1]

    let counter = 0;

    let table = document.createElement("table");
    $(table).attr("id", "board");
    $(table).attr("class", "error user-input");
    for(var i = 0; i < 9; i++){
      let row = table.insertRow(i);
      for(var j = 0; j < 9; j++){
        let cellID = "cell" + i.toString() + j.toString();
        let cell = row.insertCell(j);
        $(cell).attr("id",cellID);
        if(tableValue[counter] == -1){
          cell.innerText = '';
        }else{
          cell.innerText = tableValue[counter];
        }
        
        counter += 1;
      }

    }
    return table;
  }
  function createUndoRow(){
    let undoRow = document.createElement("table");
    $(undoRow).attr("id", "undo-row");
    $(undoRow).attr("class", "user-input")
    let row = undoRow.insertRow(0);
    for(var i = 1; i <= 9; i++){
      undoid = "undo" + i
      let cell = row.insertCell(i-1);
      cell.innerText = i;
      $(cell).attr("id",undoid);
      

    }
    image = document.createElement('img');
    $(image).attr("src", "../images/undo.png");
    undobtn = row.insertCell(9);
    $(undobtn).attr("id","undo9")
    undobtn.appendChild(image);
    return undoRow;

  }
  function checkrow(selected, number){   
    let rowNumber = selected[4];
    errors = [];
    

    for(var x = 0; x < 9; x++){
      // pass selected to this function
      // use the appropriate number to know which row to check
      // gonna need another function to change the color
      let Number = "cell" + rowNumber.toString() + x.toString();
      let NumberCell = document.getElementById(Number).innerText;
      
    
      if(NumberCell == number && Number != selected){
        document.getElementById(Number).style.backgroundColor = "#f76c5e";
        errors.push(Number);
      }  
    }
    return errors;
  
  }
  function checkcolumn(selected, number){
    let columnNumber = selected[5];
    let errors = []
    for(let x = 0; x < 9; x ++){

      let Number = "cell" +  x.toString() + columnNumber.toString();
      let NumberCell = document.getElementById(Number).innerText;

      if(NumberCell == number && Number != selected){
        document.getElementById(Number).style.backgroundColor = "#f76c5e";
        errors.push(Number);
      }  
    }
    return errors;
  }
  function checkBox(selected, number){
    let row = selected[4];
    let column = selected[5];

    let rowStart;
    let columnStart;

    let errors = [];
    if(row >= 0 && row <= 2){
      rowStart = 0;
    }else if(row >= 3 && row <= 5){
      rowStart = 3;
    }else{
      rowStart = 6;
    }
    if(column >= 0 && column <= 2){
      columnStart = 0;
    }else if(column >= 3 && column <= 5){
      columnStart = 3;
    }else{
      columnStart = 6;
    }
    for(let x = rowStart; x <= rowStart + 2; x++){
      for(let y = columnStart; y <= columnStart + 2; y++){
        let Number = "cell" +  x.toString() + y.toString();
        let NumberCell = document.getElementById(Number).innerText;

        if(NumberCell == number && Number != selected){
          document.getElementById(Number).style.backgroundColor = "#f76c5e";
          errors.push(Number);
        }  
      }
    }
    return errors;
  }
  async function changeColor(errorsArray){

    for(var x = 0; x < errorsArray.length; x++){
      document.getElementById(errorsArray[x]).style.backgroundColor = "";
      // console.log(errorsArray[x]);
    }
  }
  // change to appropriate color than delay time and change back normal color


  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});

