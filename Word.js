var Letter = require("./Letter.js");

function Word(answer){
    this.letterObj = [];

    for (var i = 0; i < answer.length; i++) {
        var letterOpt = new Letter(answer[i]);
        this.letterObj.push(letterOpt);
    }

    this.log = function () {
        answerConsLog = " ";
        for (var i = 0; i < this.letterObj.length; i++) {
            answerConsLog += this.letterObj[i] + " ";
        }
        
    }

    this.input = function (input) {
        for (var i = 0; i < this.letterObj.length; i++) {
            this.letterObj.guess(input)
        }
    }
}

module.exports = Word;