// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

//1
var partner = {
	first: 'Fatima',
	last: 'Mabrook'
}

var combinedName = partner.first + ' ' + partner.last;

//2
function isMultipleOfThree(){
	var number = 13;
	var check = 13 % 3 === 0;
	if(check) return 'is a multiple of 3';
	return 'it is not a multiple of 3';
}

isMultipleOfThree();

//3
function each(array, f){
	for(var i = 0; i < array.length; i++){
		f(array[i]);
	}
}

function avergeAge(){
	var ages = [13,14,13,15,16,17,19,13,16,15];
	var sum = 0;
	each(ages, function(element){
		sum += element;
	});
	return sum / ages.length;
}

avergeAge();

//4
function ageInSeconds(){
	var myAge = 23;
	return `my age in seconds is ${myAge * 356 * 24 * 60 * 60}`;
}
ageInSeconds();
