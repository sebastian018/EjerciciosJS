var valorHora = 1080000000;
var horasDia = 24;

$(document).ready(function(){
	$('button').click(function(){
		 $('button').after("<p>El valor en kilometros en una hora es:</p>" + valorHora);
		 $('button').after("<p>Kilometros recorridos en 800 dias:</p>" + ((horasDia*800)*valorHora));
	});
});