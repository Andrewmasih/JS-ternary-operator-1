/* its a one line shorthand for 'if' 'else' statement, it check wheater if the condition is true or false, you just need one line code: conditon? expression1: expresson2 */



let age = 25;

(age > 18) ?  "You are old enough to drive a car": "You are not old enough to drive a car"

/* if the ternary is true then expression1 will run, otherwise expression2, this is the same as: 'if' (condition) {expression1} 'esle' {expression2}   */

// The code below is the same logic but written longhand
if (age > 18) {
  "You are old enough to drive a car"
} else {
  "You are not old enough to drive a car"
}