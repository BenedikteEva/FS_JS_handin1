// const { random2 } = require("./random2");

let crypto;
try {
  crypto = require('crypto');

} catch (err) {
  console.log('crypto support is disabled!');
}

// opgaven går ud på at skabe et design der kan producere et object med en titel og et array af randoms som er objekter der har et number 'length' og en string 'random'
// vi skal bruge node crypto modul den asynchrone metode randombytes(size, callBack(err,buf))

// Asynchronous

/* crypto.randomBytes(48, (err, buf) => {
  if (err) throw err;
  return ("async:  " + `${buf.length} bytes of random data: ${buf.toString('hex')}`);

});*/
// a i am now thouroughly connvinced that you cant do this without a way to handle asynchronocity  

/*  function SecureRandomsA(size) {
  console.log([{ title: size + " Secure Randoms", randoms: randomsA(size) }])

} 
// denne funktion skal generere et array af størrelsen size af randoms med en length og en random baseret length  
function randomsA(size) {
  // her vil jeg lave et array af size antal af tal der kan divideres med 8 startende fra 8. 
  const arr = [];

  for (let i = 1; i <= size; i++) {
    arr.push(i * 8);
  }

  return arr.splice(0).reverse().map((size2) => {
    const randdomA = { size: size2, rand: crypto.randomBytes(size2, (err, buf) => { if (err) throw err; buf.toString('hex') }) };
    return randdomA;
  });
} 
console.log("randoms"+randomsA(6))
console.log("SecureRandomsA"+SecureRandomsA(6)) */

// opgave b her laver jeg et callback hell få randomsarrayet ud i den rigtige rækkefølge i modsætning til mit tidligere forsøg
// med at mappe et array 
var p = new  Promise((resolve, reject)=> {
  var ok = true;
function secrandB(){
const randomsB = [];
const randomsAllB=()=>{ crypto.randomBytes(48, (err, buf) => {
  if (err) throw err;
randomsB.push({length:buf.length, random:buf.toString('hex')}),
     crypto.randomBytes(40, (err, buf) => {
      if (err) throw err;
      randomsB.push({length:buf.length, random:buf.toString('hex')}),
         crypto.randomBytes(32, (err, buf) => {
          if (err) throw err;
          randomsB.push({length:buf.length, random:buf.toString('hex')}),
            crypto.randomBytes(24, (err, buf) => {
              if (err) throw err;
              randomsB.push({length:buf.length, random:buf.toString('hex')}),
                 crypto.randomBytes(16, (err, buf) => {
                  if (err) throw err;
                  randomsB.push({length:buf.length, random:buf.toString('hex')}),
                   crypto.randomBytes(8, (err, buf) => {
                      if (err) throw err;
                      randomsB.push({length:buf.length, random:buf.toString('hex')});
                    
                    });
                });
            });
        });
    });
});

}
}
if (ok) {
  resolve("Msg from Promise");
  console.log(randomsAllB)
}
else {
  reject("UPPPPs");
}
},5000);



console.log(p)
 



// problem med at jeg bare får et objekt ud når jeg skal bruge mit array det bliver helt klart bedre når jeg bruger promises og async await

// c

/* var p1 = makePromise("MsgPromise1",8000);
p1.then(crypto.randomBytes(48, (err, buf) => {
  if (err) throw err;
randomsC.push({length:buf.length, random:buf.toString('hex')})
  return makePromise("MsgPromise2",7000);
}).then(crypto.randomBytes(40, (err, buf) => {
  if (err) throw err;
randomsC.push({length:buf.length, random:buf.toString('hex')})
  return makePromise("MsgPromise2",7000);
}).then(crypto.randomBytes(32, (err, buf) => {
  if (err) throw err;
randomsC.push({length:buf.length, random:buf.toString('hex')})
  retur makePromise("MsgPromise2",7000);
}).then(crypto.randomBytes(24, (err, buf) => {
  if (err) throw err;
randomsC.push({length:buf.length, random:buf.toString('hex')})
  return makePromise("MsgPromise2",7000);
}).catch(error => {
  console.log("ERROR: "+error);
})))));
 */





 const randomPromise= Promise.resolve(crypto.randomBytes(24, (err, buf) => {
        if (err) throw err;
   return  ({length:buf.length, random:buf.toString('hex')})}))
  .then(x => console.log(x)); 

function makeSecureRandom(promise){
if (promise.resolve===true){
  return promise
}else{
  return "promise is not resolved";
}



}


console.log(makeSecureRandom(randomPromise));


