i = 0;
$(document).ready(function(){
    $('#caja').keypress(function(){
        $('#contador').text(i += 1);
    });
});