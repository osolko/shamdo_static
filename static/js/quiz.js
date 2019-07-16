(function() {
  const myQuestions = [
    {
      question: "Who is the 1?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "What is the best 2?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "What is the 3?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    }
  ];

  const results = [];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      // const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      const userAnswer = results[questionNumber]

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

       } 
     });

    // show number of correct answers out of total
    // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

    // show custom message
    
      if      (numCorrect == 1) { resultsContainer.innerHTML = '= 1';} 
      else if (numCorrect == 2) { resultsContainer.innerHTML = '= 2';} 
      else if (numCorrect >= 2) { resultsContainer.innerHTML = '= 3';} 

  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
  }

  function sayYes() {
  	results.push("a")
 	makeDecision()
  }

  function sayNo() {
  	results.push("b")
    makeDecision()
  }

  function makeDecision() {
  	if (currentSlide == slides.length - 1) {
      noButton.style.display = "none";
      yesButton.style.display = "none";
      slides[currentSlide].classList.remove("active-slide");
       showResults()
    } else {
    	showSlide(currentSlide + 1);
      noButton.style.display = "inline-block";
      yesButton.style.display = "inline-block";
    }
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  yesButton.addEventListener("click", sayYes);
  noButton.addEventListener("click", sayNo);
})();