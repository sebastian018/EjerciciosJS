$(document).ready(function(){
	var obj = jQuery.parseJSON( '{ "name": "John" }' );
    alert( obj.name === "John" );
});