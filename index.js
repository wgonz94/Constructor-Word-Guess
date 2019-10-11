const Word = require("./Word.js");
const inquirer = require("inquirer");

const wordList = ["doorbell","costume","sweets","candy","hay ride","dark","scary","ghost story","scary movies","pumpkin","zombie","monster","witch","autumn","afraid","frankenstein","boo","ghost","jack o lantern","spider","graveyard","vampire","secret lab","chocolate","bats","skeleton","scarecrow","candy corn","lollipop","trick or treat","haunted house","werewolf","spells","marshmellow","mad scientist","spider web","black","corn maze","apple cider","igor","goody bag","nighttime","spooky","dracula","creepy","candle","frightened","pumpkin seeds","ghoul","ghostbusters","lantern","spooks","monster mash","crypt","fortune teller","horror","coffin","goblin"]
var correctGuesses = 0;

var guesses = 10;

var randomize;
var chosenWord;

function gamePlay() {

    console.log("Welcome to Word Guess-Halloween Edition!")
}
function randomizeWord() {
    randomize = wordList[Math.floor(Math.random() * wordList.length)]
    chosenWord = new Word (randomize)

}

function guessWord() {
    if (guesses > 0 && correctGuesses < 5) {
        console.log(chosenWord.show())

        inquirer.prompt([
            {
                name: "txt",
                message: "Guess the hidden word!\n",
                validate: function (str) {
                    if (str.length != 1) 
                    return false;
                    var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                    return regEx.test(str);
                }
            }
        ]).then(function (guessedLetter) {
            var guess = guessedLetter.txt;
            chosenWord.checkGuess(guess);
            if(randomize.toLowerCase().indexOf(guess.toLowerCase()) === -1){
                guesses--;
                console.log("\nTry Again- guesses left: " + guesses + "     Letters Guesses: " + chosenWord.letterArr)
            } else {
                    console.log("Good Job!\n")
            }
            if (randomize == chosenWord)    {
                console.log(chosenWord.show());
                guesses = 10;
                correctGuesses++;
                console.log("\nWins:" + correctGuesses)
                randomizeWord();

                if(correctGuesses = 5) {
                    console.log("Congratulations!!");
                    YouWin();
                } 
            }
            if(guesses === 0) {
                console.log("Oh No! :(")
                YouLose();
            }

            guessWord();
        });
    }
}

function YouWin(){
    console.log("You won!! Didn't doubt you for one second!\n")

    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Would you like to play again?",
            default: true
        }
    ]).then(function (inquirerAnswer){
        if(inquirerAnswer.confirm){
            guesses = 10;
            correctGuesses = 0;
            randomizeWord();
            guessWord();
        } else{
            console.log("Okay! Come back soon!");
            process.exit();
        }
    })

}

function YouLose() {
    console.log("Oh man! you lost!")
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Would you like to try again?",
            default: true

        }
    ]).then(function (inquirerAnswer){
        if(inquirerAnswer.confirm) {
            guesses = 10;
            correctGuesses = 0;
            randomizeWord();
            guessWord();
        } else{
            console.log("Okay. Come back soon!")
            process.exit();
        }
    })
}

gamePlay();
randomizeWord();
guessWord();


