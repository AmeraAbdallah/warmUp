// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough? hmmm
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function occurences(string){
	let result = '';
	for(let i = 0; i < string.length; i++){
		let acc = 1;
		for(let j = 0; j < i; j++){
			if(string[i] === string[j]){
				++acc;
			}
		}
		result = result + acc;
	}
	return result;
}