// import { createElement } from "react";

// add your code here
$(document).ready(function() {
  let information = [{"date":"2013/05/03", "duration":"15:18"}, {"date":"2013/08/03", "duration":"15:22"}, {"date":"2013/03/03", "duration":"15:02"}];
  document.getElementById("HighscoresContainer").appendChild(createTable());

    // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
  
  function createTable(){
    let table = document.createElement("table");
   
    $(table).attr("id", "HighScoresTable");
    let headings = table.insertRow(0);
    $(headings).attr("id", "title");
    let date = headings.insertCell(0);
    date.innerText = "Date";
    let Duration = headings.insertCell(1);
    Duration.innerText = "Duration";

    let rowIndex = 1;
    for(var i = 0; i < information.length; i++){
     let row = table.insertRow(rowIndex);
     let date = row.insertCell(0);
     let duration = row.insertCell(1);

     date.innerText = information[i]["date"];
     duration.innerText = information[i]["duration"];
    }
    return table;
  }

});
  
  