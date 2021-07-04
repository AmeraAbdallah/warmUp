 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:

function mult(n) {
    if(n === 1){
        return n;
    }
    return n * mult(n - 1);
}

mult(3); // => 6
mult(4); // => 24

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

function numbers(n){
    var i = 1;
    var result = ' ';
    while(i < n){
        result = `${result} ${i} ${i+1}`;
        i++;
    }
    return result;
}

