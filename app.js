var giveMeAJoke = require('give-me-a-joke');
var colors = require('colors');
var figlet = require("figlet");
//lets get a random dad joke
var name = "ben";
const getAjoke = giveMeAJoke.getRandomDadJoke((joke) =>{
    console.log(joke.rainbow);
});
figlet(name, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data.green);
  });