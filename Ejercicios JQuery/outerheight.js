$(document).ready(function(){
    $("button").click(function(){
        alert("Outer height of div: " + $("div").outerHeight());
    });
});