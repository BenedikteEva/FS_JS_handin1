
let crypto;
try {
 crypto = require('crypto');
 
} catch (err) {
  console.log('crypto support is disabled!');
}

//c) making a promise
function random2(length) {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(length, (err, buf) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(buf.toString('hex'));
          return buf.toString('hex').toString()
        }
      });
    });
  }
  exports.random2 = random2;
  console.log("hej "+random2(24));