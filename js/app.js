'use strict';

console.log('Information about Me');

// Ask the viewer if I landed on an ice runway and provide responses based on yes/no or y/n answer.
var runway = prompt('Do you think I ever landed on an ice runway? Yes or No ').toLowerCase();
if (runway === 'yes') {
  console.log('Ice runway guess: ' + runway);
  alert ('Yes, I frequently landed on an ice runways when I worked north of the Arctic Circle.');
}
if (runway === 'y') {
  console.log('Ice runway guess: ' + runway);
  alert ('Yes, I frequently landed on an ice runways when I worked north of the Arctic Circle.');
}
else {
  alert ('Good guess, but the answer is yes. When I worked north of the Arctic Circle, we frequnetly had to land on ice runways.');
  console.log('Ice runway guess: ' + runway);
}

// Ask the viewer whether I live in the desert and provide responses based on yes/no or y/n answer.
var desert = prompt('Do I live in the desert? Yes or No').toLowerCase();
if (desert === 'no') {
  console.log('Desert guess: ' + desert);
  alert ('You are correct. I live in the Sierras near Lake Tahoe, so there are a lot of big pine trees.');
}
if (desert === 'n') {
  console.log('Desert guess: ' + desert);
  alert ('You are correct. I live in the Sierras near Lake Tahoe, so there are a lot of big pine trees.');
}
else {
  alert ('Good guess, but the answer is no! I live in the Sierras near Lake Tahoe.');
  console.log('Desert guess: ' + desert);
}

// Ask the viewer how I feel about biological and provide responses based on yes/no or y/n answer.
var synBiology = prompt('Do you think I have an interest in progamming cells (synthetic biology/biological computing)? Yes or No').toLowerCase();
if (synBiology === 'yes') {
  console.log('Desert guess: ' + synBiology);
  alert ('You are correct, I am fascinated with the potential of biological computing.');
}
if (synBiology === 'y') {
  console.log('Desert guess: ' + synBiology);
  alert ('You are correct, I am fascinated with the potential of biological computing.');
}
else {
  alert ('Good guess, but biological computer a big interest of mine.');
  console.log('Desert guess: ' + synBiology);
}

// Ask the viewer whether I like to eat at Cracker Barrel and provide responses based on yes/no or y/n answer.
var greasySpoon = prompt('Do I like to eat at Cracker Barrel? Yes or No').toLowerCase();
if (greasySpoon === 'no') {
  console.log('Cracker Barrel guess: ' + greasySpoon);
  alert ('You are correct. Cracker Barrel is one of the least favorite restaurants.');
}
if (greasySpoon === 'n') {
  console.log('Cracker Barrel guess: ' + greasySpoon);
  alert ('You are correct. Cracker Barrel is one of the least favorite restaurants.');
}
else {
  alert ('Since I lived in Florida for a long time, it is a good assumption that I like to eat at Cracker Barrel. Actually I never adapted to Southern food, so it is one of my least favorite places to dine.');
  console.log('Cracker Barrel guess: ' + greasySpoon);
}

// Ask the viewer whether I like yoga and provide responses based on yes or no answer.
var yoga = prompt('Do I like yoga? Yes or No').toLowerCase();
if (yoga === 'yes') {
  console.log('Yoga guess: ' + yoga);
  alert ('You are correct. I find power yoga a good way to workout and therapeutic yoga a way to decompress.');
}
if (yoga === 'y') {
  console.log('Yoga guess: ' + yoga);
  alert ('You are correct. I find power yoga a good way to workout and therapeutic yoga a way to decompress.');
}
else {
  alert ('Good guess! Many people think I am a runner, but I prefer yoga over foot races.');
  console.log('Yoga guess: ' + yoga);
}

