//use strict;

//Title for the console log.
console.log('Information about Me');

// Define counter variables.
var correctCounter = 0; //correct answers
var wrongCounter = 0; //wrong answers
var totalCounter = 0; //total problems

//FUN FACT GAME

// Ask the viewer if I landed on an ice runway and provide responses based on yes/no or y/n answer.
var runway = prompt('Do you think I ever landed on an ice runway? Yes or No ').toLowerCase();
if (runway === 'yes') {
  console.log('Ice runway guess: ' + runway);
  correctCounter += 1;
  alert ('Yes, I frequently landed on an ice runways when I worked north of the Arctic Circle.');
}
if (runway === 'y') {
  console.log('Ice runway guess: ' + runway);
  correctCounter += 1;
  alert ('Yes, I frequently landed on an ice runways when I worked north of the Arctic Circle.');
}
if (runway === 'no') {
  console.log('Ice runway guess: ' + runway);
  wrongCounter += 1;
  alert ('Good guess, but the answer is yes. When I worked north of the Arctic Circle, we frequently had to land on ice runways.');
}
if (runway === 'n') {
  console.log('Ice runway guess: ' + runway);
  wrongCounter += 1;
  alert ('Good guess, but the answer is yes. When I worked north of the Arctic Circle, we frequently had to land on ice runways.');
}

// Ask the viewer whether I live in the desert and provide responses based on yes/no or y/n answer.
var desert = prompt('Do I live in the desert? Yes or No').toLowerCase();
if (desert === 'no') {
  console.log('Desert guess: ' + desert);
  correctCounter += 1;
  alert ('You are correct. I live in the Sierras near Lake Tahoe, so there are a lot of big pine trees.');
}
if (desert === 'n') {
  console.log('Desert guess: ' + desert);
  correctCounter += 1;
  alert ('You are correct. I live in the Sierras near Lake Tahoe, so there are a lot of big pine trees.');
}
if (desert === 'yes') {
  console.log('Desert guess: ' + desert);
  wrongCounter += 1;
  alert ('Good guess, but the answer is no! I live in the Sierras near Lake Tahoe.');
}
if (desert === 'y') {
  console.log('Desert guess: ' + desert);
  wrongCounter += 1;
  alert ('Good guess, but the answer is no! I live in the Sierras near Lake Tahoe.');
}

// Ask the viewer how I feel about biological and provide responses based on yes/no or y/n answer.
var synBiology = prompt('Do you think I have an interest in progamming cells (synthetic biology/biological computing)? Yes or No').toLowerCase();
if (synBiology === 'yes') {
  console.log('Desert guess: ' + synBiology);
  correctCounter += 1;
  alert ('You are correct, I am fascinated with the potential of biological computing.');
}
if (synBiology === 'y') {
  console.log('Desert guess: ' + synBiology);
  correctCounter += 1;
  alert ('You are correct, I am fascinated with the potential of biological computing.');
}
if (synBiology === 'no') {
  console.log('Desert guess: ' + synBiology);
  wrongCounter += 1;
  alert ('Good guess, but biological computing a big interest of mine.');
}
if (synBiology === 'n') {
  console.log('Desert guess: ' + synBiology);
  wrongCounter += 1;
  alert ('Good guess, but biological computing a big interest of mine.');
}

// Ask the viewer whether I like to eat at Cracker Barrel and provide responses based on yes/no or y/n answer.
var greasySpoon = prompt('Do I like to eat at Cracker Barrel? Yes or No').toLowerCase();
if (greasySpoon === 'no') {
  console.log('Cracker Barrel guess: ' + greasySpoon);
  correctCounter += 1;  
  alert ('You are correct. Cracker Barrel is one of the least favorite restaurants.');
}
if (greasySpoon === 'n') {
  console.log('Cracker Barrel guess: ' + greasySpoon);
  correctCounter += 1;
  alert ('You are correct. Cracker Barrel is one of the least favorite restaurants.');
}
if (greasySpoon === 'yes') {
  console.log('Cracker Barrel guess: ' + greasySpoon);
  wrongCounter += 1;  
  alert ('Since I lived in Florida for a long time, it is a good assumption that I like to eat at Cracker Barrel. Actually I never adapted to Southern food, so it is one of my least favorite places to dine.');
}
if (greasySpoon === 'y') {
  console.log('Cracker Barrel guess: ' + greasySpoon);
  wrongCounter += 1;
  alert ('Since I lived in Florida for a long time, it is a good assumption that I like to eat at Cracker Barrel. Actually I never adapted to Southern food, so it is one of my least favorite places to dine.');
}

// Ask the viewer whether I like yoga and provide responses based on yes or no answer.
var yoga = prompt('Do I like yoga? Yes or No').toLowerCase();
if (yoga === 'yes') {
  console.log('Yoga guess: ' + yoga);
  correctCounter += 1;
  alert ('You are correct. I find power yoga a good way to workout and therapeutic yoga a way to decompress.');
}
if (yoga === 'y') {
  console.log('Yoga guess: ' + yoga);
  correctCounter += 1;
  alert ('You are correct. I find power yoga a good way to workout and therapeutic yoga a way to decompress.');
}
if (yoga === 'no') {
  console.log('Yoga guess: ' + yoga);
  wrongCounter += 1;
  alert ('Good guess! Many people think I am a runner, but I prefer yoga over foot races.');
}
if (yoga === 'n') {
  alert ('Good guess! Many people think I am a runner, but I prefer yoga over foot races.');
  wrongCounter += 1;
  console.log('Yoga guess: ' + yoga);
}

// STATE GAME - User tries to guess the states in where I have lived.

//States where I have lived.
var stateList = ['AK', 'CA', 'FL', 'MS', 'NV', 'WA'];

//Allows the user to try to guess each state six times. If the users
//does not guess correctly in six tries, the program tells the state.
for (var i = 0; i <6; i++) {
  var state = stateList[i];
  console.log('State I chose: ' + state);
  i++;
  var userPick = prompt('I have lived in 6 states. I am thinking of state # ' + i + '. Which one it it? Please use the two letter abbreviation.').toUpperCase();
  i--;
  for (var j = 0; j < 5; j++) {
    if (userPick !== state) {
      userPick = prompt('No that is not the state. Pick again. ').toUpperCase();
      wrongCounter += 1;
      console.log('Wrong state guess: ' + userPick);
    }
    if (userPick === state) {
      console.log('Correct state guess: ' + userPick);
      correctCounter += 1;
      break;
    }
  }
  alert(stateList[i] + ' is the state.');
}
//After the game the user is provided with a summary of the states where I have lived.
alert('In summary, I have lived in the following six states: ');
for (var k = 0; k <6; k++) {
  alert(stateList[k]);
}


// NUMBER GAME - Ask the viewer to guess the number.

//number I picked
var myNumber = 7; 

//user picks a number
var userPick = parseInt(prompt('I have picked a number between 1 and 10. Guess the number')); 
console.log('Integer number: ' + userPick + myNumber);

//Allows the user to try to guess the number 4 times. Provides feedback on whether
//the guess is less than, more than or correct.
for (var i = 0; i < 3; i++) {
  if (myNumber === userPick) {
    alert('Congratulations! You picked the number I selected, ' + myNumber);
    correctCounter += 1;
    console.log('Correct pick: ' + userPick + myNumber);
    i = 3;
  }
  else if (myNumber > userPick) {
    userPick = parseInt(prompt('The number I picked is more than the number you selected. Please try again.'));
    wrongCounter += 1;
  }
  else if (myNumber < userPick) {
    userPick = parseInt(prompt('The number I picked is less than the number you selected. Please try again.'));
    wrongCounter += 1;
  }
}

//provides the number if the user did not guess the number in four tries
if (myNumber !== userPick) {
  alert ('The number was ' + myNumber + '. Sorry you did not get the right number this time. Maybe next time');
}

// ANSWER COUNTER SUMMARY
//Total right and wrong answers. For variable definition, see the beginning of the code.
totalCounter = correctCounter + wrongCounter;
alert('There were ' + totalCounter + ' questions total. You answered ' + correctCounter + ' correctly.');
