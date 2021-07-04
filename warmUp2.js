// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function greatestCommonDivisor(x, y){ //24 6 = 6
    if(y === 0){
        return x;
    }
    return greatestCommonDivisor(y, x % y);
}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
function sum(x, y){
    if(y === 0){
        return x;
    }
    return sum(++x, --y);
}
