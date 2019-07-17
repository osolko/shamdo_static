(function() {
  const myQuestions = [
    {
      question: "1. Удалось ли вам почувствовать легкое расслабление мышц тела?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "2. Чувствовали ли вы приятное тепло в теле?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "3. Возникало ли ощущение невесомости или тяжести в теле?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "4. Вы ощущали тепло от пламени костра?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "5. Возникло ли ощущение присутствия в лесу?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "6. Вы чувствовали запах леса?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "7. Вы ощущали, как ваши невесомые руки поднимаются?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "8. Вы ощущали комфорт и дремоту?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "9. Казалось ли вам, что вы видите сон?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "10. Почувствовали перегрузки при взлете звездолета?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "11. Вы видели инопланетян на неизвестной планете?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "12. Вы смеялись, общаясь с инопланетянами?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "13. Видели ли вы костёр и лес с открытыми глазами?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "a"
    },
    {
      question: "14. Помните ли вы всё, что с вами происходило после полного пробуждения?",
      answers: {
                a: "Да",
                b: "Нет"
     
      },
      correctAnswer: "b"
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
   
 //0 points   
    if      (numCorrect < 1) { resultsContainer.innerHTML = 'К сожалению, вам очень сложно расслабиться - пока что вам не удалось войти в гипнотический транс. Начните с <a href="/category/relax/">медитаций для расслабления</a> и повторите этот тест повторно через 4 недели.';} 
// 1-3 points
    else if (numCorrect >= 1 && numCorrect <=3) { resultsContainer.innerHTML = 'Вы вошли в начальный, поверхностный гипнотический транс. Вам стоит пытаться углублять это состояние. Вы можете совершенствовать это состояние с помощью <a href="/category/relax/">медитаций для расслабления</a> и <a href="/category/dynamic/">динамических медитаций</a>.';} 
// 4-6 points
    else if (numCorrect >= 4 && numCorrect <=6) { resultsContainer.innerHTML = 'Вы умеете расслабляться. У вас хорошее воображение. Глубина гипнотического транса умеренная. Вы можете совершенствовать это состояние с помощью <a href="/category/sleeptrack/">медитаций для сна</a>, <a href="/category/relax/">медитаций для расслабления</a> и <a href="/category/dynamic/">динамических медитаций</a>.';} 
// 7-9 points
    else if (numCorrect >= 7 && numCorrect <=9) { resultsContainer.innerHTML = 'Вы погрузились в средние фазы гипнотического транса. Наши медитации и гипнотические индукции будут помогать вам справляться с различными проблемами.';} 
// 10-13 points 
    else if (numCorrect >= 10 && numCorrect <=13) { resultsContainer.innerHTML = 'Вы погрузились в умеренно глубокое состояние гипнотического транса. Такая глубина транса поможет вам справляться со многими проблемами: вы можете излечиться от многих психосоматических заболеваний, искоренить вредные привычки, успешно осваивать навыки самогипноза.';} 
// 14 points 
    else if (numCorrect >= 14) { resultsContainer.innerHTML = 'У вас наблюдается глубокое гипнотическое состояние. Вы можете активно влиять на свое физическое и психическое состояние. Вы сможете раскрыть в себе экстраординарные способности, излечить себя от различных недугов и заболеваний, эффективно моделировать личностные качества, черты характера и установки.';} 


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