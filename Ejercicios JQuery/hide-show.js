$(document).ready(function(){
	$('#ocultar').hide();
	$("#ver").click(function(){
       $(this).hide();
       $('#ocultar').show();
	});
});