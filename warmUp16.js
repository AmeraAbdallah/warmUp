// Given a string text, you want to use the characters of text to form as many 
//instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of 
//instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function howManyBalloon(string){
	var balloon = [0, 0, 0, 0, 0];
				 //0b 1a 2l 3o 4n
	if(string.length < 1){
		return 'enter a string.';
	}

	if(string.length > 10000){
		return 'string length is very long, the function accepts only strings that <= 10000';
	}

	for(var i = 0; i < string.length; i++){
		if(string[i] === 'b'){
			balloon[0] = balloon[0] + 1;
		}
		else if(string[i] === 'a'){
			balloon[1] = balloon[1] + 1;
		}
		else if(string[i] === 'l'){
			balloon[2] = balloon[2] + 1;
		}
		else if(string[i] === 'o'){
			balloon[3] = balloon[3] + 1;
		}
		else if(string[i] === 'n'){
			balloon[4] = balloon[4] + 1;
		}
	}

	balloon[2] = parseInt(balloon[2] / 2);
	balloon[3] = parseInt(balloon[3] / 2);

	return Math.min(...balloon);
}