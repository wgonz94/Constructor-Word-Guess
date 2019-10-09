const Word = require("./Word.js");
const inquirer = require("inquirer");

const wordList = ["doorbell","costume","sweets","candy","hay ride","dark","scary","ghost story","scary movies","pumpkin","zombie","monster","witch","autumn","afraid","frankenstein","boo","ghost","jack o lantern","spider","graveyard","vampire","secret lab","chocolate","bats","skeleton","scarecrow","candy corn","lollipop","trick or treat","haunted house","werewolf","spells","marshmellow","mad scientist","spider web","black","corn maze","apple cider","igor","goody bag","nighttime","spooky","dracula","creepy","candle","frightened","pumpkin seeds","ghoul","ghostbusters","lantern","spooks","monster mash","crypt","fortune teller","horror","coffin","goblin"]
var correctGuesses = 0;

var guesses = 10;

var randomize;
var chosenWord;

function gamePlay() {

    randomize = wordList[Math.floor(Math.random() * wordList.length)]
    chosenWord = new Word (randomize)

    console.log("Welcome to Word Guess-Halloween Edition!")
}


