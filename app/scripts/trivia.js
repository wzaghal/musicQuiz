//Giving closures a try. Loving it.

var trivia = function() {
	var allQuestions = ['{artist} produced the album:','Which artist created the album {album}?'];
  	var currentTrivia={'question':'{artist} produced the album:'};
  	var triviaChoices=[];

  return {
  	//returns currentQuestion
  	getCurrentQuestion: function() {
  		return currentTrivia.question;
  	},
	//returns placeholder for currentQuestion
	getPlaceholder: function(){
		var currQuestion = this.getCurrentQuestion();
		return currQuestion.substring(currQuestion.indexOf('{'),currQuestion.indexOf('}')+1);
	},
	getCurrentAnswer: function(){
		return currentTrivia.answer;
	},
	setCurrentAnswer: function(answer){
		currentTrivia.answer=answer;
	},
	//sets currentQuestion by using the replace function
	setCurrentQuestion: function(artist) {
		this.replace(artist,'{artist} ');
	},
	//resets the currentQuestion to it's original placemarker form
	reset: function(){
		currentTrivia.question = allQuestions[0];
	},
	replace: function(value,placeholder){
		currentTrivia.question = currentTrivia.question.substring(0,currentTrivia.question.indexOf(placeholder))+
		value+' '+currentTrivia.question.substring(currentTrivia.question.indexOf(placeholder)+placeholder.length,currentTrivia.question.length);
	},
	addTriviaChoice: function(choice){
		triviaChoices.push(choice);
	},
	getTriviaChoices: function(){
		return triviaChoices;
	},
	shuffleTriviaChoices: function(){
		triviaChoices = _.shuffle(triviaChoices);
	},
	display: function(){
		//display question
		$('.question').empty().append(trivia.getCurrentQuestion());

		for (var i = 0; i< trivia.getTriviaChoices().length;i++){
			$('.choice'+(i+1)).empty().append(trivia.getTriviaChoices()[i]);
		}
	}
  };
}();