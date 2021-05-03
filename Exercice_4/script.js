/*$('#green').click(function(){
    $('p').css({"color":"green"});
  });

  $('#red').click(function(){
    $('p').css({"color":"red"});
  });

  $('#blue').click(function(){
    $('p').css({"color":"blue"});
  });
*/

$('.color').click(function(){
  //On crée une variable qui récupère la valeur de l'ID de l'élement cliqué
  // (mot clé this correspond à l'objet .color)
var colorDiv = $(this).attr("id");
//On selectionne notre texte et on lui applique la methode .css
//qui prend en parametre la couleur de l'id de l'élement cliqué
$('#texte').css('color', colorDiv);
});
