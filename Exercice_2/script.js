$("#image").dblclick(function(){
  //J'applique la methode .css a mon objet #image a laquelle je passe des parametres
    // le mot clé this fait reference a l'objet #image
  $(this).css("width", "500px")
  });

 /*
var modWidth = 50;
$( "div" ).one( "dblclick", function() {
  $( this ).width( modWidth ).addClass( "mod" );
  modWidth -= 8;
});
*/