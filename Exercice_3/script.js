$('#afficher').click(function(){
    $('p').show();
  });

  $('#cacher').click(function(){
    $('p').hide();
  });

  //autre façon: la facon toggle: on a besoin que d'un 
  //seul bouton comme un interupteur
  /*
  $(document).ready(function(){
  $("#cacher").click(function(){
$("div").toggle();
  });
});
/*