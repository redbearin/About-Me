//'use strict';

//'use strict';

console.log('Information about Me');

// Ask the viewer my favorite color. If correct color is selected, notify user. If not, ask user to pick again.
var runway = prompt('Do you think I ever landed on an ice runway? ').toLowerCase();
if (runway === 'yes') {
  console.log('Ice runway guess: ' + runway);
  alert ('Yes, I frequently landed on an ice runways when I worked on construction projects north of the Arctic Circle in the winter months.');
}
else {
  alert ('Good guess, but the answer is yes! When I worked north on construction projects in the winter months, we frequnetly had to land on ice runways.');
  console.log('Ice runway guess: ' + runway);
}

/*
// Ask the viewer my favorite sport. If correct sport is selected, notify user. If not, ask user to pick again.
var favSport = prompt('What is my favorite sport? ');
while (favSport !== 'soccer') {
  console.log('Favorite sport: ' + favSport);
  alert ('That is not my favorite sport. Please try again. Please use lowercase letters.');
  favSport = prompt('What is my favorite sport? ');
}
if (favSport === 'soccer') {
  alert ('You have great taste in athletic events! Yes, ' + favSport + ' is my favorite sport.');
  console.log('Favorite sport: ' + favSport);
}

// Ask the viewer my favorite restaurant. If correct restaurant is selected, notify user. If not, ask user to pick again.
var favRestaurant = prompt('What is my favorite restaurant? ');
while (favRestaurant !== 'slanted door') {
  console.log('Favorite restaurant: ' + favRestaurant);
  alert ('That is not my favorite restaurant. My favorite restaurant is in San Francisco. I has one Michelin star. It is located at the Ferry Building. The name have two word (s------ and d---). Please try again. Please use lowercase letters.');
  favRestaurant = prompt('What is my favorite restaurant? ');
}
if (favRestaurant === 'slanted door') {
  alert ('You are definitely a foodie! Yes, the ' + favRestaurant + ' is my favorite restaurant.');
  console.log('Favorite restaurant: ' + favRestaurant);
}

// Ask the viewer my favorite coffee shop. If correct coffee shop is selected, notify user. If not, ask user to pick again.
var favCoffee = prompt('What is my favorite coffee shop? ');
while (favCoffee !== 'ancient grounds') {
  console.log('Favorite coffee shop: ' + favCoffee);
  alert ('That is not my favorite coffee shop. It is in Seattle. The name is two words (a----- g-------). It has ancient artifacts and wonderful coffee. It is downtown. Please try again. Please make sure to use lower case letters.');
  favCoffee = prompt('What is my favorite coffee shop? ');
}
if (favCoffee === 'ancient grounds') {
  alert ('You must like coffee with character! Yes, ' + favCoffee+ ' is my favorite place to get coffee.');
  console.log('Favorite Color: ' + favCoffee);
}

//Ask the viewer my favorite pet. If correct pet is selected, notify user. If not, ask user to pick again.
var favPet = prompt('What is my favorite pet? ');
while (favPet !== 'dog') {
  console.log('Favorite pet: ' + favPet);
  alert ('That is not my favorite pet. Please try again. Please use lowercase letters.');
  favPet = prompt('What is my favorite pet? ');
}
if (favPet === 'dog') {
  alert ('You must like canines! Yes, my favorite pet is the ' + favPet + ' .');
  console.log('Favorite pet: ' + favPet);
}
*/
