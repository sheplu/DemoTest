$('body').css('background-color', 'blue');
$('body').append('<p>'+
	$('body').css('background-color')
	+'</p>');

$('#body').click(function() {
	console.log("body");
	$('this').css('background-color', 'green');
});

$('#button').click(function(event) {
	event.stopPropagation();
	console.log("button");
	$('body').css('background-color', 'yellow');
	$("span").text("Not valid!").show().fadeOut(1000);
		$.ajax({
	        url: 'http://localhost:3000/todo/all',
	        datatype: 'json',
	        success: function(data) {
	            console.log("succes");
	            console.log(data);
	        },
	        error: function(data) {
	            console.log("error");
	        },
    	});
	
});
