$(document).ready(function(){
    $("li.start").nextUntil("li.stop").css({"color": "red", "border": "2px solid red"});
});