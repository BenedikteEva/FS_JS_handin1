var all= ["Lars", "Peter", "Jan", "Bo"];
//a) Use join to create a single string from all, with names: comma-, space. and  # - separated.
console.log(all.join(",")+"  "+all.join(" ")+"  "+all.join("#"))


//b) Given this array: 
var numbers = [2, 3, 67, 33]; 
//Create a reducer function that will return the sum (105) of all values in numbers
function reduceNumbers(array) {
    return array.reduce(function (a,b) { return a+b  });
}
console.log(reduceNumbers(numbers));

//reduce c)  Given this array:

var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
];
var kanin = [
    { name: "Peter",car: "Lambhorghini",  age: 45 },
    { name: "Jan",car: "Volvo", age: 76 },
    { name: "Janne", age: 89 },
    { name: "Martin", age: 32 },
];


function reduceMembers(arrayM) {
    var sum = arrayM.reduce(function (a, b) { return { age: a.age + b.age } });

    return sum.age / arrayM.length;

}
console.log(reduceMembers(members));
console.log(reduceMembers(kanin));

//d) (difficult) Imagine you were to create a system that could count votes for the presidential election in USA.
//Given this array of votes: 
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
var initialValue = {};
var reducer = function(tally, vote){
    if (!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] = tally[vote] + 1;
    }
    return tally;
}

var result = votes.reduce(reducer, initialValue);

console.log(result);