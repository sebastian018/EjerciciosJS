$(document).ready(function(){
    $("button").click(function(){
        alert("Outer width of div: " + $("div").outerWidth());
    });
});