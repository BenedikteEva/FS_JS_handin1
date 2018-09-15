// ex 3) Using the Prototype property to add new functionality to existing objects
//For at definer vores egen funktion må vi starte med at deklarerw den på Array.prototype ellers får vi en type error.
//Vi sender funktionen til Array.prototype.myOwnFilter og vi modtager den funktion som parameter.

var namest = ["Allan", "Hans", "Werner", "Bitten", "Gertrud", "Hassan", "Ib", "Bo", "Ida"];

//filter

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
Array.prototype.callbackFilter=function(callback){
    let newArray=[];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])===true) newArray.push(this[i]);
    }
    
    return newArray;
}

var newFiltered= namest.callbackFilter(function(name){

    return name.length<=3;
});

console.log("newfiltered:  "+newFiltered)

//Map
function callbackMap(arr) {
    let myMapReturn = [];
    for (var i = 0; i < arr.length; i++) {
    
        myMapReturn.push(arr[i].toUpperCase());
    }
 
    return myMapReturn;
}

Array.prototype.callbackMap = function (callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) { 
        newArray.push(callback(this[i]))
    }
    console.log("newarray:"+newArray)
    return newArray;
}

var newUppercased = namest.callbackMap(function (name) {
    return name.toUpperCase();
});

console.log('myOwnMap: ' + newUppercased);
// okay kind of weird. if we use the toUpperCase we change the array provided to the callbackfuntion if we dont use it 
//then no matter how much we uppercase values in the callback function it remains lowercase

// 4) Getting really comfortable with filter and map
// a) Use map() to create to create the <li>’s for an unordered list and eventually a string like below 
//(use join() to get the string of <li>’s):

var names = ["Allan", "Hans", "Werner", "Bitten", "Gertrud", "Hassan", "Ib", "Bo", "Ida"];
var unorderedListOfNames=names.map(function(name){
    return name
}).join("</li><li>");

document.getElementById("test").innerHTML ="<li>"+unorderedListOfNames+"</li>";

function filter3orless(){
    var equalsOrLessThanThree = names.filter(function (a1) {
        return a1.length <= 3;
    })
    var unorderedListOfNames=equalsOrLessThanThree.map(function(name){
        return name
    }).join("</li><li>")

    document.getElementById("test").innerHTML ="<ul><li>"+unorderedListOfNames+"</li></ul>";
}


document.getElementById("3orLess").onclick= filter3orless;

//b Use map()+(join + ..) to create to create a string, representing a two column table, for the data given below:

var namesPhones = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, 
{name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

var phoneList=namesPhones.map((namePhone)=>{
    var name= namePhone.name;
    var phone = namePhone.phone;
    var tableRow= "<td>"+name+"</td><td>"+phone+"</td>"
    return tableRow
}).join("</tr><tr>");
document.getElementById("test2").innerHTML ="<table><tr><th>Name</th><th>Phone</th><tr>"+phoneList+"</tr></table>";


