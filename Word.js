var Letter = require("./Letter.js");

var Word = function(word){
  
    this.addletter = function(word){
        var letterArr = [];
        for (var i = 0; i < word.length; i++) {
            var currentLett = new Letter(word[i]);
            letterArr.push(currentLett);
        }
        return letterArr;
    }

    this.letters = this.addletter(word);
    this.chosenWord = word;

    this.checkGuess = function(guess){
        for (var i = 0; i < this.letters.length; i++){
            this.letters[i].letterGuess(guess);
        }
    }

    this.show = function () {
        var letterStrg = " ";
        for (var i = 0; i < this.letters.length; i++){
            letterStrg += this.letters[i].input()
        }
        return letterStrg;
    }


    
}

module.exports = Word;