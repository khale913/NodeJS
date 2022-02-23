const jokes = require("give-me-a-joke");
const colors = require('colors');
// console.log(colors);


jokes.getRandomDadJoke(function (joke ) {
    console.log(joke.rainbow);
})