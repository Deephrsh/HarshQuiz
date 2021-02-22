const quizData = [
{
	question: "What is the second most spoken language in Canada?",
	a:"French",
	b:"Spanish",
	c:"Punjabi",
	d:"Hindi",

	correct:"a",
},
{
	question: "which city is known as Royal City of Punjab?",
	a:"Sangrur",
	b:"Patiala",
	c:"Mansa",
	d:"Malerkotla",

	correct:"b",
},
{
	question: "which bird is Symbol Bird of Punjab?",
	a:"Peacock",
	b:"Parrot",
	c:"Canry",
	d:"Eagle",

	correct:"d",
},
{
	question: "What is leagal age for driving in India?",
	a:"17",
	b:"18",
	c:"21",
	d:"16",

	correct:"b",
},
{
	question: "which state is known as Golden Bird in India?",
	a:"Haryana",
	b:"Delhi",
	c:"Punjab",
	d:"Mumbai",

	correct:"c",
},
]
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const atxt = document.getElementById("atxt");
const btxt = document.getElementById("btxt");
const ctxt = document.getElementById("ctxt");
const dtxt = document.getElementById("dtxt");
const submit = document.getElementById("submit");

let currentQuiz=0;
let score=0;

function loadQuiz () {
    
    deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
	questionEl.innerText = currentQuizData.question;
	atxt.innerText = currentQuizData.a;
	btxt.innerText = currentQuizData.b;
	ctxt.innerText = currentQuizData.c;
	dtxt.innerText = currentQuizData.d;

}

loadQuiz();

function getSelected (){

	let answer = undefined;
	answerEls.forEach(answerEl=>{
		if(answerEl.checked)
		{
			answer = answerEl.id;
		}
		
	});

	return answer;

}

function deselectAnswers(){
	answerEls.forEach(answerEl=>{
		answerEl.checked = false;
	});

}

submit.addEventListener("click", ()=>{

	const answer = getSelected();

	if(answer){
		if(answer === quizData[currentQuiz].correct){

			score++;

		}

		currentQuiz++;

		if(currentQuiz < quizData.length){
			loadQuiz();
		}

		else{
			quiz.innerHTML = `<h2>Your Score = ${score}/${quizData.length}</h2>`;
		}
	}

})