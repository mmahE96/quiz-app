const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "script",
        b: "scripting",
        c: "link",
        d: "html",
        correct: "a",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "Both head section and the body section",
        b: "The body section",
        c: "The head section",
        d: "The arm section",
        correct: "b",
    },
    {
        question: "How do you write Hello World in an alert box?",
        a: "msg(Hello world)",
        b: "alert(Hello World)",
        c: "start(Hello world)",
        d: "for(Hello world)",
        correct: "b",
    },
    {
        question: "How do you call a function named myFunction?",
        a: "myFunction()",
        b: "call myfunction()",
        c: "force myFunction()",
        d: "function call myFunction()",
        correct: "a",
    },
    {
        question: "What is capital of Germany",
        a: "Bern",
        b: "Basel",
        c: "Berlin",
        d: "Barcelona",
        correct: "b",
    }
];

const main = document.getElementById("main") //.innerHTML = "END";
const questionInput = document.getElementById("question");
const answerA = document.getElementById("a_text");
const answerB = document.getElementById("b_text");
const answerC = document.getElementById("c_text");
const answerD = document.getElementById("d_text");
const answers = document.querySelectorAll(".answer");
const submit = document.getElementById("submit");

let q = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
questionInput.innerHTML = quizData[q].question
answerA.innerHTML = quizData[q].a
answerB.innerHTML = quizData[q].b
answerC.innerHTML = quizData[q].c
answerD.innerHTML = quizData[q].d
}

//This function loads quiz questons and dependig on "q" value, it changes.



function answer(){
const answer = getAnswer()    

if(answer) {
    if(answer === quizData[q].correct) {
        score++
    }

    q++

    if(q < quizData.length) {
        loadQuiz()
    } else {
        main.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
        `
    }
}
}

//This function runs "getSelected()" f. and get returned checked "answer.id". That answer is saved in const answer.
//Conditional statemant check if there is answer, and then checks if choosen answer is same as correct answer from array. If yes
//then one is added to the score variable, and q is added to change question. When q gets higher than quizData.length, quiz ends
//else quiz loads with different (q) questions.


function getAnswer(){
    let answer;

    answers.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id 
        }
        
    })
    return answer;
}

//"answers" represents (array of) all radio buttons available. With forEach method it is itterated throug this array and looked for checked button.
//When found true, "answer.id" of that button is assigned to "answer" constant. Then, "answer" is returned.  




