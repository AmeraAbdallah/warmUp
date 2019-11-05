// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(string){
	string += ' ';
	var words = [];
	var wordCounter = 0;
	var word= '';
	var result= '';
	for (var i = 0; i < string.length; i++) {
		if(string[i] === ' '){
			words[wordCounter] = word;
			word = '';
			++wordCounter;
		} else {
			word +=string[i];
		}
	}
	var j = words.length - 1;
	while(j >= 0){
		result+= words[j] + ' ';
		--j;
	}
	return result;
}