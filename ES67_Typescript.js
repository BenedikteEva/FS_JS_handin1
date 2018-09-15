var _this = this;
var sum = function (a, b) { return a + b; };
/* The arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};

*/
console.log(sum(1, 2)); // 3
//if the arrowfunction are multiple lines we need curly brackets around the expression
var sum2 = function (a, b) {
    var result = a + b;
    return result; // if we use curly braces, use return to get results
};
console.log(sum2(1, 2)); // 3
// please notice the word let. it is a variable that can be rewritten If you dont want a variable to be rewritten though codeexecution you can use the word const. 
// these two words can replace the old var. The problem with var is that it is saved within the global object and that the declaration is hoisted.
var foo={};
// a method to create methods
foo.method = function(name, cb){
  this[name] = cb;
};
foo.method("bar", function(){
    console.log("test");
  },
  foo.bar(), // => "test"
this.test =("attached to the module"));


var foo = {
    test: "attached to an object"
};
// a method to create methods

foo.method = function (name, cb) {
    this[name] = cb;
};
// use an arrow function and get
// lexical analysis of "this"
foo.method("bar", function () {
    // not what you expected, maybe?
    console.log(_this.test);
});
foo.bar();
