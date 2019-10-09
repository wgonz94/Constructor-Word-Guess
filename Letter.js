var Letter = function (value){
this.letter = value,
this.isLetterGuessed = false,

this.input = function(){
    if(this.letter == " "){
        return (" ");
    }
    else if (this.isLetterGuessed){
        return (this.letter)
    } 
    else if(this.isLetterGuessed === false){
        return ("_");
    }
}

this.letterGuess = function(guess) {
    if(guess.toLowerCase() === this.letter.toLowerCase()){
        this.isLetterGuessed = true;
    }
}

}

module.exports = Letter;