var score = 0;
var currentQuestion = 0;  /* Index of the current question in qAndA Array */

var qAndA = [{
	question: "les lapons vivent ?",
	possibleAnswers: ["en antartique", "en artique", "en terre de feu", "dans les yvelinne"],
  answer: 1
},{
	question: "Ou superman fait il ses courses ?",
	possibleAnswers: ["Au supermarché ", "Sur internet", "C'est jimmy olsen qui s'y colle", "Superman ne mange pas de nourriture humaine"],
  answer:2
},{
	question: "Quand vous tirez la chasse d’eau, dans quel sens s’évacue l’eau ?",
	possibleAnswers: ["Quoi il y a un sens ?", "Dans le sens inverse des aiguilles d’une montre", "Dans le sens des aiguilles d’une montre", "Dans n’importe quel sens l’eau fait ce qu’elle veut"],
  answer:1
},{
	question:"Un seul de ces super héros n’existe pas, lequel ?",
	possibleAnswers:["L’homme araignée", "L’homme sable", "L’homme élastique", "L’homme purée"],
  answer:3
},{
	question:"Combien de cases y a-t-il sur un échiquier ?",
	possibleAnswers:["Cela dépend de la taille des cases", "Cela dépend de la taille de l’échiquier", "Cela dépend de la taille des pièces", "64 cases"],
  answer:3
},{
	question:"Trouvez lequel de ces films osé n'existe pas",
	possibleAnswers:["Qui veut la bite de roger rapeau ","Le silence des anus","couche moi sur le sable et fais jaillir ton petrole","Blanche fesse et les sept mains"],
  answer:2
},{
	question:"Parmi ces Schtroumpfs, un seul n’existe pas, lequel ?",
	possibleAnswers:["Le Schtroumpf à lunettes","Le grand Schtroumpf","Le Schtroumpf cosmonaute","Le Schtroumpf qui n’existe pas"],
  answer:3
},{
	question:"La joconde n'a pas...",
	possibleAnswers:["De culotte","De petit doigt","De charisme","De sourcils"],
  answer:0
},{
	question:"Alf s'appelle alf parce que...",
	possibleAnswers:["C'est le bruit qu'il fait quand il mange un petit chat","C'est le nom de son grand-pere sur melmack","Ca signifie alien life form","Il est moitié tapir moitié castor"],
  answer:2
},{
	question:"Quelle revue vendue dans le commerce n'existe pas...",
	possibleAnswers:["Top dog magazine","Businessman, une génération prend le pouvoir","alladur magazine","Robert hue raconte"],
  answer:3
}];

var questionHeading = document.getElementById('question');
var answer1Label = document.getElementById('answer1Label');
var answer2Label = document.getElementById('answer2Label');
var answer3Label = document.getElementById('answer3Label');
var answer4Label = document.getElementById('answer4Label');
var quizNode = document.getElementById('quiz');

// reveal the score to the user.
function revealScore(){
  showResult('Quiz complet.\nTon score est: ' + score);

}

// Hide the form and show the result
function showResult(resultText){
  // Grab any html node/elements we need
  var result = document.createElement('h3');
  result.id = 'result';

  // Set result node text to the result
  result.textContent = resultText;

  // Hide the form element
  quizNode.style.visibility='hidden';
  // Insert the result before the form element
  document.getElementById('container').insertBefore(result, document.getElementById('quiz'));
}

// Hide the result node and unhide the form node.
function transitionQuestions(){
  var resultNode = document.getElementById('result');
  document.getElementById('container').removeChild(resultNode);
  quizNode.style.visibility='visible';
}

// Set the current form to the question at qAndAIndex
function populateForm(qAndAIndex){
  if(qAndAIndex === 'undefined' || qAndAIndex > qAndA.length){
    return;
  }
  // Set the Question Text
  questionHeading.textContent = qAndA[qAndAIndex].question;

  // Set the Question Possible answers
  answer1Label.textContent = qAndA[qAndAIndex].possibleAnswers[0];
  answer2Label.textContent = qAndA[qAndAIndex].possibleAnswers[1];
  answer3Label.textContent = qAndA[qAndAIndex].possibleAnswers[2];
  answer4Label.textContent = qAndA[qAndAIndex].possibleAnswers[3];
}
// Respond to the nextQuestion button being pushed.
function nextQuestion(){
  if(currentQuestion === qAndA.length){
    return;
  }
  // Setup variables
  var resultText;
  var selectedAnswer;
  var answerSelected;

  // Setup a correctAnswer variable that I can use through out the function
  var correctAnswer = qAndA[currentQuestion].possibleAnswers[qAndA[currentQuestion].answer];

  // Create an array of our radio inputs
  var radioAnswers = [
                      document.getElementById('answer1'),
                      document.getElementById('answer2'),
                      document.getElementById('answer3'),
                      document.getElementById('answer4')
                    ];

  // Verify that some answer was selected
  for(var i = 0; i < radioAnswers.length; i++){
  // iterate through each radio button and
  // check to see if one is selected
  // if there is not then answerSelected stays false
    if(radioAnswers[i].checked){
      answerSelected = i;
      break;
    }
  }
  // If no answer was selected alert the user and return from this function
  if(typeof answerSelected === 'undefined'){
    alert('il faut choisir!');
    return;

  // An answer was selected
  } else {
    // Instantiate a selectedAnswer variable since we know we have one
    selectedAnswer = qAndA[currentQuestion].possibleAnswers[answerSelected];
    resultText = '';

    // Check the answer and inform the user
    if( selectedAnswer === correctAnswer){
      // Correct answer
      resultText = 'Correct!';
      score++;
    } else {
      // Incorrect answer
      resultText = selectedAnswer + ' est correct.\nla réponse correcte est: ' + correctAnswer;
      score--;
    }
    // reset the radio boxes
    // radioAnswers[currentQuestion].checked = false;

    showResult(resultText);

    // make sure we have more questions
    if(qAndA.length > ++currentQuestion){
      // Load up the next question.
      populateForm(currentQuestion);

      // set a short timer to delete the result and unhide the form
      window.setTimeout(transitionQuestions, 2000);
    } else {
      // no more questions show the final result to the user.
      revealScore();
    }
  }
}
function previewQuestion(){
  if(currentQuestion === qAndA.length){
    return;
  }
  // Setup variables
  var resultText;
  var selectedAnswer;
  var answerSelected;

  // Setup a correctAnswer variable that I can use through out the function
  var correctAnswer = qAndA[currentQuestion].possibleAnswers[qAndA[currentQuestion].answer];

  // Create an array of our radio inputs
  var radioAnswers = [
                      document.getElementById('answer1'),
                      document.getElementById('answer2'),
                      document.getElementById('answer3'),
                      document.getElementById('answer4')
                    ];

  // Verify that some answer was selected
  for(var i = 0; i < radioAnswers.length; i++){
  // iterate through each radio button and
  // check to see if one is selected
  // if there is not then answerSelected stays false
    if(radioAnswers[i].checked){
      answerSelected = i;
      break;
    }
  }
  // If no answer was selected alert the user and return from this function
  if(typeof answerSelected === 'undefined'){
    alert('il faut choisir!');
    return;

  // An answer was selected
  } else {
    // Instantiate a selectedAnswer variable since we know we have one
    selectedAnswer = qAndA[currentQuestion].possibleAnswers[answerSelected];
    resultText = '';

    // Check the answer and inform the user
    // if( selectedAnswer === correctAnswer){
    //   // Correct answer
    //   resultText = 'Correct!';
    //   score++;
    // } else {
    //   // Incorrect answer
    //   resultText = selectedAnswer + ' est correct.\nla réponse correcte est: ' + correctAnswer;
    //   score--;
    // }
    // reset the radio boxes
    // radioAnswers[currentQuestion].checked = false;

    showResult(resultText);

    // make sure we have more questions
    if(qAndA.length > --currentQuestion){
      // Load up the next question.
      populateForm(currentQuestion);

      // set a short timer to delete the result and unhide the form
      window.setTimeout(transitionQuestions,100);
    } else {
      // no more questions show the final result to the user.
      revealScore();
    }
  }
}


// Do initial form population
populateForm(currentQuestion);

console.log('Ca marche brah!');

