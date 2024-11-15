const questions =  [
    {
        question:" Which data structure is needed to convert infix notation to postfix notation?",
        answers:[
            {text: "A: Tree", correct :false},
            {text :"B: Branch" , correct:false},
            {text:  "C: Stack", correct:true},
            {text: "D: Queue", correct:false},
        ]
    },
    {
        question: "What is a data structure?",
        answers:[
            { text: "A: A programming language", correct : false },
            { text:"B: A collection of algorithms", correct : false },
            { text :"C: A way to store and organize data" , correct:true},
            { text: "D: A type of computer hardware", correct: false },
        ]
    },
    {
        question : "What are the disadvantages of arrays?",
        answers:[
            { text: " A: Index value of an array can be negative", correct:false},
            { text : "B: Elements are sequentially accessed", correct:false},
            { text:" C: Data structure like queue or stack cannot be implemented", correct:false},
            { text: " D: There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size", correct : true} ,
        ]
    },
    {
        question: "Which data structure is used for implementing recursion?",
        answers: [
                 { text: "A: Stack", correct: true},
                 { text: "B: Queue", correct:false},
                 { text: "C: List", correct: false},
                 { text:"D: Array", correct:false},
        ]
    },
    {
        question: "Which of the following is not the application of stack?",
        answers: [
            { text: "A: Data Transfer between two asynchronous process", correct : true},
            { text:"B: Compiler Syntax Analyzer" , correct:false},
            { text:"C: Tracking of locall variables at run time", correct:false},
            { text:"D: A parenthesses kbalancing program", correct:false},
        ]
    }
     
];

const questionElemnt =document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
     hideOptions();
    let currentQuestion = questions[currentQuestionIndex];
    let quesionNo = currentQuestionIndex +1;
    questionElemnt.innerHTML = quesionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function hideOptions() {
     nextButton.style.display = "none";
     while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
     }
}

function selectAnswer(e){
    const selectedBtn =  e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classlist.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    questionElemnt.innerHTML = 'You scored ${score} out of ${question.length}!';
        nextButton.innerHTML = 'Play again';
        nextButton.style.display = "block";

}

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();        
    }else{
        startQuiz()
    }
})


startQuiz();