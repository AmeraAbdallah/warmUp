/* 1. Create a function that takes a Roman numeral as its argument and returns its value 
as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
        starting with the leftmost digit and skipping any 0s. 
        So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
        and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
        The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    
    2. Complete the method/function so that it converts dash/underscore delimited words into 
    camel casing. The first word within the output should be capitalized only if the original 
    word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

// Q1
function solution(roman){
    var romans = roman.split('');
    var res = 0;
    for(var i = 0; i < romans.length; i++){

        var zeros = '1';
        for(var j = 0; j < romans.length - i; j++){
            zeros += '0';
        }
        console.log(zeros)

        zeros = parseInt(zeros);
        if(romans[i] === 'I'){
            res += 1;
        } else if(romans[i] === 'V'){
            res += 5;
        } else if(romans[i] === 'X'){
            res += 10;
        } else if(romans[i] === 'L'){
            res += 50;
        } else if(romans[i] === 'C'){
            res += 100;
        } else if(romans[i] === 'D'){
            res += 500;
        } else if(romans[i] === 'M'){
            res += 1000;
        }

    }
    return res;
}

// Q2
function toCamelCase(str){
    var result = '';
    for(var i = 0; i < str.length; i++){
        if(str.substr(i, 1) === '-' || str.substr(i, 1) === '_'){
            result += str.substr(i+1, 1).toUpperCase();
            i = i + 2;
        } else {
            result += str.substr(i, 1);
        }
    }
    return result;
}

// Q3
function filter_list(array){
    var arr = [];
    for(var i  = 0; i < array.length; i++){
        if(typeof(array[i]) === 'number'){
            arr.push(array[i]);
        }
    }
    return arr;
}