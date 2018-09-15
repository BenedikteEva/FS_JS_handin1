/* 1) 
Implement and test the Closure Counter Example from the Slides */
var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () { changeBy(1); },
        decrement: function () { changeBy(-1); },
        value: function () { return privateCounter; }
    }
};
var counter1 = makeCounter();
var counter2 = makeCounter();
//counter1.increment();
//counter1.increment();
//lert(counter1.value()); /* console.logs 2 */



/* 2)
Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and returns an object with the following methods:
setAge
setName
getInfo (should return a string like Peter, 45) */
function Person(first, last, age) {
    this.firstName,
    this.lastName ,
    this.age ,
    this.getInfo = function () {
        return this.name+ ", " + this.age
    }
    this.setName=function(first, last){
       this.name=first+" "+last
    }
    this.setAge=function(age){this.age=age}
   
 
}

let John= new Person("John", "Doe", 30);
console.log(John.getInfo());
John.setAge(31)
let Benedikte = new Person();
Benedikte.setName("BenedikteEva", "Majbrink")
Benedikte.setAge(47)
John.age=24;
console.log(Benedikte.getInfo());
console.log(John.getInfo());
// iife - immediatly invoked function expression function expression is created and immideatly called with own private vaiables7
Benedikte=new Person("JOhn", "Doe", 45);
console.log(Benedikte.getInfo());

(function() {

    let message = "Hello";
  
    console.log(message); // Hello
  
  })();
  
// Ways to create IIFE

(function() {
    console.log("Brackets around the function");
  })();
  
  (function() {
    console.log("Brackets around the whole thing");
  }());
  
  !function() {
    console.log("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    console.log("Unary plus starts the expression");
  }();
  
  // i nyere javascript bruger mn en code block {et eller andet } 
  {
    // do some job with local variables that should not be seen outside
  
    let message = "Hello";
  
    console.log(message); // Hello
  }
  
  //console.log(message); // Error: message is not defined