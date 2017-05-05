//jquery

$(document).ready(function(){
  $("td").mouseenter(function(){
    $(this).addClass("hovered");
  });
  $("p").click(function(){
    $("td").removeClass("hovered");
  });
});
