$(document).ready(function(){
    personObj = new Object();
    personObj.nombre = "Sebastian";
    $("button").click(function(){
        $("div").text($.param(personObj));
    });
});