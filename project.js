var questionBank = [
    {
        question : 'which of this following Excel charts reperents only one value for each variable?',
        option : ['Function', 'Line', 'Pie', 'Bar',],
        answer: 'Pie'
    }, 
    {
        question : 'To see the document before the printout is taken use......',
        option : ['Insert table', 'Paste', 'Format printer', 'Print preview'],
        answer: 'print preview'
    },
    {
        question : 'Alu works on the instruction and data held in the.....',
        option : ['Notebook', 'Registers', 'Copy pad', 'I/O devices', 'None of these'],
        answer : 'Registers'
    },
    {
        question : 'To move data from one part of the document to another, following is used .....',
        option : ['Cut and Paste', 'Copy and Paste', 'Cut and Delete', 'Copy and Delete', 'Cut and insert'],
        answer : 'Cut and Paste'
    },
    {
        question : 'Another name for a pre-programmed formula in Excel is .....',
        option : ['Range', 'Graph', 'Function', 'Cell', 'None of these'],
        answer : 'Function'
    },
    {
        question : 'Another name for a pre-programmed formula in Excel is .....',
        option : ['Range', 'Graph', 'Function', 'Cell', 'None of these'],
        answer : 'Function'
    },
    {
        question : 'Another name for a pre-programmed formula in Excel is .....',
        option : ['Range', 'Graph', 'Function', 'Cell', 'None of these'],
        answer : 'Function'
    }
]


var question = document.getElementById('question');
var next = document.querySelector('.Next');
var i=0;
var previous = document.querySelector('.previous');
var points = document.getElementById('score');
var score=0;

var scoreboard = document.getElementById('scoreboard');                                                                                                          
var span = document.querySelectorAll('span');
var quizContainer = document.getElementById('Quiz-container');

function displayQuestion() {
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML=questionBank[i].option[0];
    option1.innerHTML=questionBank[i].option[1];
    option2.innerHTML=questionBank[i].option[2];
    option3.innerHTML=questionBank[i].option[3];
    // option4.innerHTML=questionBank[i].option[4];
    stat.innerHTML="Question"+ ' ' +(i+1)+' ' +'of'+' '+questionBank.length;
   
}
next.addEventListener('click',nextQuestion)
function nextQuestion() {
    if (i<questionBank.length-1)
     {
      i=i+1;
      
      displayQuestion();  
    }

    else{
        points.innerHTML= score+'/'+questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';
    }
}

next.addEventListener('click',nextQuestion);
// function to check answer
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for (let a=0;a<questionBank.length;a++)
        {   
     var list= document.createElement('li');
     list.innerHTML= questionBank[a].answer;
     answers.appendChild(list);
    }
}
function previousQ() {
    if (i<questionBank.length+1) 
    {
       i=i-1;
       displayQuestion();
    }
}
previous.addEventListener('click',previousQ);
function calcScore(e) {
    if (e.innerHTML===questionBank[i].answer && score<questionBank.length) 
    {
     score=score+1;
     score++
     document.getElementById(e.id)
    }
    else{
        document.getElementById(e.id);
    }
    setTimeout(nextQuestion,3000);
}
function backToQuiz(){
    location.reload();
}

displayQuestion();
