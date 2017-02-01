$('body').css('background-color', 'blue');
$('body').append('<p>'+
	$('body').css('background-color')
	+'</p>');

$('#body').click(function() {
	$('this').css('background-color', 'green');
});

var ID;

$('#button').click(function(event) {
	event.stopPropagation();
	$('body').css('background-color', 'yellow');
	$("span").text("Not valid!").show().fadeOut(1000);
	var ID = setInterval(getAjax, 10000);
	
});

function getAjax() {
	$.ajax({
	        url: 'http://localhost:3000/todo/all',
	        datatype: 'json',
	        success: function(data) {
	            addData(data);
	        },
	        error: function(data) {
	            console.log("error");
	        },
    	});
}

function addData(data){
	$('div').html('');
	for(elem in data) {
		$('div').append('<p>'+ 
			data[elem].title +
			' <br/>' +
			data[elem].message +
			'</p>');	
	}
}