var giveMeAJoke = require('give-me-a-joke');
var colors = require('colors');
//lets get a random dad joke
const getAjoke = giveMeAJoke.getRandomDadJoke((joke) =>{
    console.log(joke.rainbow);
});