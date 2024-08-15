


const randomNum = Math.floor(Math.random () * 100) + 1;
console.log(randomNum);
// guessNumber(randomNum);
window.alert(guessNumber (randomNum));

function guessNumber(randomNum) {
let guess = parseInt(window.prompt ('Please guess a number between 1-100'));  
  console.log((guess));

let attempt = 1;
let returnMessage = '';


  if (! isNaN(guess)){
      while (guess !== randomNum && attempt < 10){
          if (guess < randomNum) {
              returnMessage = `Number is higher than you guess.  Try again,you have ${10 - attempt} remaining`;
          }else {
              returnMessage = ` Number is lower than the guess. Try again, you have ${10 - attempt} remaining`;
          }
        //   returnMessage = 'Guess again'
attempt++
guess = parseInt(window.prompt(`${returnMessage}, Please pick a number between 1 - 100`));
 console.log(returnMessage);
 console.log(attempt);
      }
    } else {
        returnMessage = `Please enter a valid number, restart the game`;
  }
 

}
 if (guess === randomNum){
     returnMessage = ` you win ! :) The number was : $ {randomNum}`;
 }
 else if (attempt == 10) {
     returnNessage = `Game over: you took more than 10 attempts`;
 }else
 {
    returnMessage = 'Please enter a valid number';
    console.log(returnMessage);
 }
