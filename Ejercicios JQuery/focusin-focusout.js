$(document).ready(function(){
    $("div").focusin(function(){
        $(this).css("background-color", "#FFFFCC");
    });
    $("div").focusout(function(){
        $(this).css("background-color", "#FFFFFF");
    });
});