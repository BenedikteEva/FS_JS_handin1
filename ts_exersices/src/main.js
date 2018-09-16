var burger = 'hamburger', // String 
calories = 300, // Numeric
tasty = true; // Boolean
// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';
// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.
/* function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
} */
speak(burger, calories); //Our hamburger has 300 calories.
//var tasty: boolean = "I haven't tried it yet"; //[ts] Type '"I haven't tried it yet"' is not assignable to type 'boolean'.
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
// Arguments don't match the function parameters.
//speak("tripple cheesburger", "a ton of");//$ tsc main
//main.ts:19:32 - error TS2345: Argument of type '"a ton of"' is not assignable to parameter of type 'number'.
//  19   speak("tripple cheesburger", "a ton of"); men virker i den comilede js-udgave af main
