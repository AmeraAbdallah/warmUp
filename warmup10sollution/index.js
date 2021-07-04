var className = 'green';
$('#btn').on('click', function(){
	$('#ul').append('<li class= ' + className + '>' + $('#inpt').val() + '</li>');
	if(className === 'green'){
		className = 'red';
	} else {
		className = 'green';
	}
	$('#inpt').val('');
});