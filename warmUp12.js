/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 function mysteryRange(str, n){
    var arr = [];

        // for(var j = 0; j < str.length - n; j ++){
            for(var i = 0; i < str.length; i = i + 2){
                
                // for(var j = 0 ; j < str.length - n; j++){
                    // for(var k = 0; k < str.length - n; k++){
                        arr.push(parseInt(str.substr(i, 2)));
                        console.log(arr)
                    // }
                    
                // }
                // arr.push(parseInt(str.substr(i, 1)));
            }

            for(var i = 0; i < arr.length; i++){
                //take only (str.length - n ) pairs
            }
            return arr;
        // }
 }

