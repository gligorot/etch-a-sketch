//jquery

$(document).ready(function(){
  $("td").mouseenter(function(){
    $(this).addClass("hovered");
  });
  $(".clear").click(function(){
    $("td").removeClass("hovered"); //CHANGE THIS lATER
  });
});

// i need to automate the function below
function gridTest(){
  var div = document.createElement("div");
  div.className = "created";
  document.getElementById("container").appendChild(div);
}
/*
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

document.getElementById("main").appendChild(div);
*/
/*finish automating this, height and width parameters remaining */
function grid() {
  var gridCount = prompt("Enter the desired grid count per line (1-64):");
  console.log(gridCount); //remove
  var width = 960/gridCount;
  var height = 960/gridCount;
  console.log(height);
  function gridGen(gridCount) {
    console.log("GC started"); //remove
    var cont = document.body;
    for (var hor = 0; hor < gridCount; hor++){ //hor(izontal)
      console.log("row " + hor); //remove
      var row = document.createElement("div"); //may need to readd id=row
      row.className = "row_created";
      for (var ver = 0; ver < gridCount; ver++){ //ver(tical)
        console.log("col "+ ver); //remove
        var col = document.createElement("div");
        col.className = "col_created";
        row.appendChild(col);
      }
      document.getElementById("container").appendChild(row);

    }
  };
  gridGen(gridCount);
};
