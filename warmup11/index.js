var direction;

$('#left').on('click', function(){
	direction = 'left';
});

$('#right').on('click', function(){
	direction = 'right';
});

$('#create').on('click', function(){
	if(direction === undefined) {
		alert('please click on right or left before')
	} else if(direction === 'right') {
		$('#rightList').prepend('<li> new Element </li>')
	} else if(direction === 'left') {
		$('#leftList').prepend('<li> new Element </li>')
	}
});