
$("#green").mouseenter(function () {
  $("p").css({ "color": "green" });
});
$("#green").mouseleave(function () {
  $("p").css({ "color": "black" });
});

$("#red").mouseenter(function () {
  $("p").css({ "color": "red" });
});
$("red").mouseleave(function () {
  $("p").css({ "color": "black" });
});

$("#blue").mouseenter(function () {
  $("p").css({ "color": "blue" });
});
$("blue").mouseleave(function () {
  $("p").css({ "color": "black" });
});

/*Autre facon, avec variables:

$("#red, #blue, #green").mouseenter(function () {
  var divColor = $(this).atr("id");
  $("#text").css("color", divColor);
});

$("#red, #blue, #green").mouseout(function(){
$("text").css("color", "black");
      });

      ou alors:

      $("#red, #blue, #green").on(mouseenter, mouseleave,function(){
        var divColor = $(this) .attr('id');
        $('#text').toggleClass(divColor);
      });
