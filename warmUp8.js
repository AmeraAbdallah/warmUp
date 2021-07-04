//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

/*
I tried to iterate over seconde array and in each iteration I iterate over the first array an check 
but it is not working
*/
function each(array, f){
	for(var i = 0; i < array.length; i++){
 		f(array[i]);
	}
}

function isSubset(array, array1){
	var result = false;
	each(array1, function(element1, i1){
		var result1 = false;
		each(array, function(element, i){
			result1 = result1 || array1.includes(element);
		});
		console.log(result1, " 2");
		console.log(result, " 3");
		result = result && result1;
		console.log(result, " 4");

		
	});
	return result;
}