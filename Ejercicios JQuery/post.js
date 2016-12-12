$(document).ready(function(){
    $("button").click(function(){
        $.post("demo_test_post.asp",
        {
          name: "Sebastian",
          city: "Sepulveda"
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});