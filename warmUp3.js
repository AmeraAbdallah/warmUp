// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females = ['Amera', 'Fooz', 'Fatima', 'Ruba', 'Huda', 'Lina', 'Hania', 'Ons'];
var males = ['Wajdi', 'Hamam', 'Anas', 'Mahdi', 'Ahmed', 'Abd Alsalam', 'Salim', 'Amin'];
var instructors = ['Matt', 'Yousef', 'Saif', 'Tamara', 'Ragad', 'Omar'];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middleElement(array){
    return array[parseInt((array.length -1) / 2)];
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function each(array, f){
    for(var i = 0; i < array.length; i++){
        f(array[i], i);
    }
}

function map(array, cb){
    let newArray = [];
    each(array, function(element, index){
        newArray.push(cb(element, index));
    });
    return newArray;
}

function multibliedByTwoIfEvenIndex(array){
    return map(array, (element, index)=>{
        if(index % 2 === 0 && typeof(element) === 'number'){
            return element * 2;
        }
        else {
            return element;
        }
    });
}
