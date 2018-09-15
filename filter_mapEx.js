// declaring an array of names (strings) and writing them to console(not that we should the latter but needed to figure out 
// stuff about this new codeeditor)-- modified 3. semester excerisce
// Day 1 
// ex. 1) Using existing functions that takes a callback as an argument

var names = ["Allan", "Hans", "Werner", "Bitten", "Gertrud", "Hassan", "Ib", "Bo", "Ida"];
console.log("The array names:")
console.log(names);

// filter and equals less than tree

var equalsOrLessThanThree = names.filter(function (a1) {
    return a1.length <= 3;
});
console.log("Using filter:  " + equalsOrLessThanThree);

// map and uppercased

var namesUpCased = names.map(function (el, i) {
    return { index: i, value: el.toUpperCase() };
});
for (let i = 0; i < namesUpCased.length; i++) {
    console.log(namesUpCased[i].value);
}
// Ex 2) Implement user defined functions that take callbacks as an argument

//my Filter function with callback  

function callbackFilter(arr) {
    var lengthLessOrEqualTo3 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length <= 3) lengthLessOrEqualTo3.push(arr[i]);
    }
    return lengthLessOrEqualTo3;
}
function myFilter(array, callback) {
    return callback(array);
}
myFilter(names,callbackFilter);

//it only works with string funny enough when i wrtite it as below it returns 3,4,5 . 
var numbers = "345";
myFilter("using numbers:  " + numbers, callbackFilter);
var a;

//myMap with callback

function callbackMap(arr) {
    var myMapReturn = [];
    for (var i = 0; i < arr.length; i++) {
        a = arr[i];
        myMapReturn.push(a.toUpperCase());
    }
    return myMapReturn;
}

function myMap(array, callback) {
    return callback(array);
}

console.log("MyMap with callback:  "+myMap(names, callbackMap));



