//jquery

$(document).ready(function(){
  /*
  $("div").mouseenter(function(){
    $(this).addClass("col_created hovered");
  });
  */
  $("div").on("mouseenter", ".col_created", function() {
    $(this).addClass("hovered"); //exchange later for rainbow effect- need to add specific color with .css("background-color" "#color")
  });
  $(".clear").click(function(){
    $(".col_created").removeClass("hovered"); //CHANGE THIS lATER
  });

});

/*
// i need to automate the function below
function gridTest(){
  var div = document.createElement("div");
  div.className = "created";
  document.getElementById("container").appendChild(div);
}

var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

document.getElementById("main").appendChild(div);
*/


function grid() {
  $(document).ready(function (){
    $("#container").empty();
  });
  var gridCount = prompt("Enter the desired grid count per line (1-64):");
  function gridGen(gridCount) {
    var cont = document.body;
    for (var hor = 0; hor < gridCount; hor++){ //hor(izontal)
      var row = document.createElement("div"); //may need to re-add id=row
      row.className = "row_created";
      for (var ver = 0; ver < gridCount; ver++){ //ver(tical)
        var col = document.createElement("div");
        col.className = "col_created";
        row.appendChild(col);
      }
      document.getElementById("container").appendChild(row);

    }
  };
  gridGen(gridCount);
  var $width = 640/gridCount; //HERE LIES THE DESIRED TOTAL WIDTH/HEIGHT, ALSO IN CSS FILE UNDER row_created
  var $height = 640/gridCount;

  $(document).ready(function () {
    $(".col_created").css("height", $height);
    $(".col_created").css("width", $width);
    $(".row_created").css("height", $height);

  });

};
