x = 0;
$(document).ready(function(){
    $(window).resize(function(){
        $("span").text(x += 1);
    });
});