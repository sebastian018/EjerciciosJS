$(document).ready(function(){
$( "#hoverme" ).hover(function() {
  $( this ).find( "img" ).stop( true, true ).fadeOut();
}, function() {
  $( this ).find( "img" ).stop( true, true ).fadeIn();
});
});