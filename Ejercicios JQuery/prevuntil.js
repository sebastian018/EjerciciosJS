$(document).ready(function(){
    $("li.start").prevUntil("li.stop").css({"color": "red", "border": "2px solid red"});
});