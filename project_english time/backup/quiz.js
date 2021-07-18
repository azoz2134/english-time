(function(){
    // Functions
    function shuffle(array) {
        var currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
    
            // variable to store the list of possible answers
            const answers = [];
    
            // and for each available answer...
            for(letter in currentQuestion.answers){
    
                // ...add an HTML radio button
                answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
                );
            }
    
            // add this question and its answers to the output
            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
            }
        );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        currentQuestion.answers.correctAnswer
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const all_questions = [
      {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "c"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {question: "Where can you write lives?",answers: {a: "My aunt ____ in Scotland.",b: "Alice and Emma ____ in Ireland.",c: "I ___ near Birmingham."},correctAnswer: "a"},
{question: "I was born .....",answers: {a: "before 30 years",b: "thirty years ago",c: "the last thirty years"},correctAnswer: "b"},
{question: "Do you mind if I open the window?",answers: {a: "Yes, that's fantastic",b: "Don't be silly",c: "No, not at all"},correctAnswer: "c"},
{question: "You .....",answers: {a: "mustn't to go",b: "don't have to go",c: "needn't to go"},correctAnswer: "c"},
{question: "Do you speak English?",answers: {a: "Yes we do",b: "Yes we don't",c: "Yes they do"},correctAnswer: "a"},
{question: "Where can you write don’t?",answers: {a: "I ___ have a car.",b: "It ___ rain much in Mexico.",c: "Paul ___ like coffee."},correctAnswer: "a"},
{question: "Which word goes in the space?___ you live near here?",answers: {a: "Do   ",b: "Does   ",c: "Are"},correctAnswer: "a"},
{question: "Which sentence is correct?",answers: {a: "Maria haves a brown dog.   ",b: "Tom goes to work on Sundays.   ",c: "My parents does the shopping on Saturdays.  "},correctAnswer: "b"},
{question: "Which is the correct answer to this question?Does your sister work here?",answers: {a: "No, she doesn’t.   ",b: "Yes, she have.   ",c: "Yes, she do.   "},correctAnswer: "a"},
{question: "Sue: “……….…. some sandwiches?” Pat: “Yes, please. I’m hungry.”",answers: {a: "Are you liking",b: "Would you like",c: "Does she want"},correctAnswer: "b"},
{question: "I’m going to see him ……….…. Tuesday.",answers: {a: "in",b: "on",c: "of"},correctAnswer: "b"},
{question: "Your idea is ……….…. mine.",answers: {a: "more good than",b: "better than",c: "better that"},correctAnswer: "b"},
{question: "Tony ……….….up early on Sunday mornings.",answers: {a: "is get sometimes",b: "sometimes get",c: "sometimes gets"},correctAnswer: "c"},
{question: "At the moment he ……….….",answers: {a: "is sleeping",b: "sleep",c: "sleeping"},correctAnswer: "a"},
{question: "She ……….…. a new laptop last month.",answers: {a: "buy",b: "is buying",c: "bought"},correctAnswer: "c"},
{question: "He ……….…. to work. He’s ill in bed.",answers: {a: "can’t go",b: "isn’t go",c: "can’t to go"},correctAnswer: "a"},
{question: "Sue: “……….…. some sandwiches?” Pat: “Yes, please.I’m hungry.”",answers: {a: "Are you liking",b: "Would you like",c: "Does she want"},correctAnswer: "b"},
{question: "I’m going to see him ……….…. Tuesday.",answers: {a: "in",b: "on",c: "of"},correctAnswer: "b"},
{question: "Your idea is ……….…. mine.",answers: {a: "more good than",b: "better than",c: "better that"},correctAnswer: "b"},
{question: "There isn’t ……….…. bread. I can’t make sandwiches.",answers: {a: "any",b: "a_",c: "many"},correctAnswer: "a"},
{question: "……. very cloudy today. Let’s hope it doesn’t rain.",answers: {a: "They are",b: "There are",c: "It’s"},correctAnswer: "c"},
{question: " We’d like to see you again. Can you give ……. yourphone number?",answers: {a: "us",b: "our",c: "ours"},correctAnswer: "a"},
{question: " Choose the most suitable response. Hello! How areyou?",answers: {a: "I’m an engineer.",b: "Pleased to meet you.",c: "Fine, thanks. And you?"},correctAnswer: "c"},
{question: " Excuse me. Can you tell me the way to the busstation",answers: {a: "Yes. You can catch a bus near the bus station.",b: "Turn left at the traffic lights. It’s on the right. Youcan’t miss it.",c: "I don’t like travelling by bus."},correctAnswer: "b"},
{question: " Did you have a good holiday?",answers: {a: "Yes, but it was too short!",b: "Yes, I’m going on holiday tomorrow.",c: "Yes, I want a long holiday at the seaside."},correctAnswer: "a"},
{question: " How often do you see her?",answers: {a: "I never look at her. She lives in another town.",b: "Not very often. She doesn’t live near me.",c: "Yes, I do."},correctAnswer: "b"},
{question: " What does she do?",answers: {a: "She does secretary.",b: "She’s a secretary.",c: "She’s cooking dinner."},correctAnswer: "b"},
{question: " (On the phone) Can I speak to Jill, please?",answers: {a: "I don’t want to speak to her.",b: "I am.",c: "Sorry, she isn’t here. Can I take a message?"},correctAnswer: "c"},
{question: " What time did you go to bed last night?",answers: {a: "Very late! That’s why I’m sleepy.",b: "It’s ten o’clock.",c: "I don’t like getting up early."},correctAnswer: "a"},
{question: " Could you pass me the salt, please?",answers: {a: "There isn’t it.",b: "Yes, I’d like some salt.",c: "Sure. Here you are."},correctAnswer: "c"},
{question: " Choose the correct phrase to complete eachquestion. PAUL : “………. in the evening?” SUSAN ",answers: {a: "How did you stay",b: "Where did you stay",c: "Where are you staying"},correctAnswer: "b"}
      
    ];
    const myQuestions = all_questions.slice(0, 20);
    shuffle(myQuestions);
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  