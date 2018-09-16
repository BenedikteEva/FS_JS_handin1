//Execution in serial
const fetch = require('node-fetch');
var now = require("performance-now")
//npm install --save performance-now og npm install --save node-fetch

const URL = "https://swapi.co/api/people/";
 
function fetchPerson(url){
 return fetch(url).then(res => res.json()
  );
}
async function printNames() {
  let start= now();
  console.log("Before");
  const person1 = await fetchPerson(URL+1);
  const person2 = await fetchPerson(URL+2);
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
 let end=  now();
  console.log(start.toFixed(3)) // the number of milliseconds the current node process is running
console.log((start-end).toFixed(3)) // ~ 0.002 on my system
}



//debugresult:
/* C:\Program Files\nodejs\node.exe --inspect-brk=22295 asyncAwait1\async1.js 
Debugger listening on ws://127.0.0.1:22295/3a45ddbd-f176-44ae-84dd-a08856d71006
Before
async1.js:11
Luke Skywalker
async1.js:14
C-3PO
async1.js:15
After all */


// Execution in parallel


async function fetchPerson2(url){
  return await fetch(url).then(res => res.json()
   );
 }
 
 async function printNames2() {
  let start= now();
 console.log("Before");
 let person=[];
 for (let i =1; i<4;i++){
  person.push(fetchPerson2(URL+i));
 }
for (let i =0;i<3;i++){
 console.log( person[i].name)
}

 await console.log("After all"); 
 let end=  now();
  console.log(start.toFixed(3)) // the number of milliseconds the current node process is running
console.log((start-end).toFixed(3)) // ~ 0.002 on my system
}
//printNames();
 printNames2();


