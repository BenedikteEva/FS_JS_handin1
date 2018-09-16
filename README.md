# FS_JS_handin1

Er først færdig søndag aften 16/9

Der ligger nogle txt-filer som bare er materiale til reflektionerne, noget har jeg selv skrevet andet har jeg bare copypastet

code exempler ligger i forskellige js eller ts filer og forskellige projekter. 

Nedenstående er en oversigt over de eksempler jeg kan komme med so far og hvor jeg kan finde dem. 


Babel, webpack and Linters
1. Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises (scratch surface)

2. Explain the purpose of “use strict” and Linters, exemplified with ESLint (linters + eslint scratch surface)
-in javascript you can use a variable without declaring it but you migth get warning. When you use strict mode it will give 
an explicit error when trying to do exact-ly that.

Javascript
3. Explain using sufficient code examples the following features in JavaScript. 
a. Variable/function-Hoisting 
b. this in JavaScript and how it differs from what we know from Java/.net.
c. Function Closures and the JavaScript Module Pattern      -- closureIIFEEx.js --
d. Immediately-Invoked Function Expressions (IIFE)          -- closureIIFEEx.js --
e. JavaScripts Prototype                                    -- cb_prototypeEx.js --
f. User defined Callback Functions (writing your own functions that takes a callback)   -- cb_prototypeEx.js --

4. Explain the methods map, filter and reduce
Provide examples of user defined reusable modules            --filter_mapEx.js and reduceEx.js -- 
 implemented in Node.js
ES6-7 and TypeScript
5.
Provide examples and explain the es2015 features: 
a. let,                                                     --generally use let or const, var is really not neccessary --
b. arrow functions,                                         --ES67_Typescript.ts--
c. this,                                                    -- closureIIFEEx.js --
d. rest parameters, 
e. de-structuring assignments, 
f. maps/sets etc.


Modules in node and es2015
6. Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
                                                            -- webpackdemos--

ES6 
7. Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
8. Provide examples with es6, running in a browser, using Babel and Webpack

TypeScript
9. Provide an number of examples to demonstrate the benefits of using TypeScript, including,
a. types, 
b. interfaces, 
c. classes and 
d. generics

Callbacks, Promises and async/await

10. Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:
a. Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")  --Pyramid of doom ex in secureRandom.js-- 
b. Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel 
c. Example(s) that demonstrate how to implement our own promise-solutions.
d. Example(s) that demonstrate error handling with promises

11. Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
 Provide examples to demonstrate 
a. Why this often is the preferred way of handling promises
b. Error handling with async/await
c. Serial or parallel execution with async/await.

