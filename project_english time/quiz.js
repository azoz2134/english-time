(function () {
    // Functions
    function shuffle(array) {
        var currentIndex = array.length, randomIndex;

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
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

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

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            currentQuestion.answers.correctAnswer

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer.toLowerCase()) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
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
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
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
    let all_questions = [];
    const quiz_a1 = [
        { question: "Where can you write lives?", answers: { a: "My aunt ____ in Scotland.", b: "Alice and Emma ____ in Ireland.", c: "I ___ near Birmingham." }, correctAnswer: "a" },
        { question: "I was born .....", answers: { a: "before 30 years", b: "thirty years ago", c: "the last thirty years" }, correctAnswer: "b" },
        { question: "Do you mind if I open the window?", answers: { a: "Yes, that's fantastic", b: "Don't be silly", c: "No, not at all" }, correctAnswer: "c" },
        { question: "You .....", answers: { a: "mustn't to go", b: "don't have to go", c: "needn't to go" }, correctAnswer: "c" },
        { question: "Do you speak English?", answers: { a: "Yes we do", b: "Yes we don't", c: "Yes they do" }, correctAnswer: "a" },
        { question: "Where can you write don’t?", answers: { a: "I ___ have a car.", b: "It ___ rain much in Mexico.", c: "Paul ___ like coffee." }, correctAnswer: "a" },
        { question: "Which word goes in the space?___ you live near here?", answers: { a: "Do   ", b: "Does   ", c: "Are" }, correctAnswer: "a" },
        { question: "Which sentence is correct?", answers: { a: "Maria haves a brown dog.   ", b: "Tom goes to work on Sundays.   ", c: "My parents does the shopping on Saturdays.  " }, correctAnswer: "b" },
        { question: "Which is the correct answer to this question?Does your sister work here?", answers: { a: "No, she doesn’t.   ", b: "Yes, she have.   ", c: "Yes, she do.   " }, correctAnswer: "a" },
        { question: "Sue: “……….…. some sandwiches?” Pat: “Yes, please. I’m hungry.”", answers: { a: "Are you liking", b: "Would you like", c: "Does she want" }, correctAnswer: "b" },
        { question: "I’m going to see him ……….…. Tuesday.", answers: { a: "in", b: "on", c: "of" }, correctAnswer: "b" },
        { question: "Your idea is ……….…. mine.", answers: { a: "more good than", b: "better than", c: "better that" }, correctAnswer: "b" },
        { question: "Tony ……….….up early on Sunday mornings.", answers: { a: "is get sometimes", b: "sometimes get", c: "sometimes gets" }, correctAnswer: "c" },
        { question: "At the moment he ……….….", answers: { a: "is sleeping", b: "sleep", c: "sleeping" }, correctAnswer: "a" },
        { question: "She ……….…. a new laptop last month.", answers: { a: "buy", b: "is buying", c: "bought" }, correctAnswer: "c" },
        { question: "He ……….…. to work. He’s ill in bed.", answers: { a: "can’t go", b: "isn’t go", c: "can’t to go" }, correctAnswer: "a" },
        { question: "Sue: “……….…. some sandwiches?” Pat: “Yes, please.I’m hungry.”", answers: { a: "Are you liking", b: "Would you like", c: "Does she want" }, correctAnswer: "b" },
        { question: "I’m going to see him ……….…. Tuesday.", answers: { a: "in", b: "on", c: "of" }, correctAnswer: "b" },
        { question: "Your idea is ……….…. mine.", answers: { a: "more good than", b: "better than", c: "better that" }, correctAnswer: "b" },
        { question: "There isn’t ……….…. bread. I can’t make sandwiches.", answers: { a: "any", b: "a_", c: "many" }, correctAnswer: "a" },
        { question: "……. very cloudy today. Let’s hope it doesn’t rain.", answers: { a: "They are", b: "There are", c: "It’s" }, correctAnswer: "c" },
        { question: " We’d like to see you again. Can you give ……. yourphone number?", answers: { a: "us", b: "our", c: "ours" }, correctAnswer: "a" },
        { question: " Choose the most suitable response. Hello! How areyou?", answers: { a: "I’m an engineer.", b: "Pleased to meet you.", c: "Fine, thanks. And you?" }, correctAnswer: "c" },
        { question: " Excuse me. Can you tell me the way to the busstation", answers: { a: "Yes. You can catch a bus near the bus station.", b: "Turn left at the traffic lights. It’s on the right. Youcan’t miss it.", c: "I don’t like travelling by bus." }, correctAnswer: "b" },
        { question: " Did you have a good holiday?", answers: { a: "Yes, but it was too short!", b: "Yes, I’m going on holiday tomorrow.", c: "Yes, I want a long holiday at the seaside." }, correctAnswer: "a" },
        { question: " How often do you see her?", answers: { a: "I never look at her. She lives in another town.", b: "Not very often. She doesn’t live near me.", c: "Yes, I do." }, correctAnswer: "b" },
        { question: " What does she do?", answers: { a: "She does secretary.", b: "She’s a secretary.", c: "She’s cooking dinner." }, correctAnswer: "b" },
        { question: " (On the phone) Can I speak to Jill, please?", answers: { a: "I don’t want to speak to her.", b: "I am.", c: "Sorry, she isn’t here. Can I take a message?" }, correctAnswer: "c" },
        { question: " What time did you go to bed last night?", answers: { a: "Very late! That’s why I’m sleepy.", b: "It’s ten o’clock.", c: "I don’t like getting up early." }, correctAnswer: "a" },
        { question: " Could you pass me the salt, please?", answers: { a: "There isn’t it.", b: "Yes, I’d like some salt.", c: "Sure. Here you are." }, correctAnswer: "c" },
        { question: " Choose the correct phrase to complete eachquestion. PAUL : “………. in the evening?” SUSAN ", answers: { a: "How did you stay", b: "Where did you stay", c: "Where are you staying" }, correctAnswer: "b" }
    ];
    const quiz_a2 = [
        { question: "Where can you write don’t?", answers: { a: "I ___ have a car.", b: "It ___ rain much in Mexico.", c: "Paul ___ like coffee." }, correctAnswer: "a" },
        { question: "Which word goes in the space? ___ you live near here?", answers: { a: "Do   ", b: "Does   ", c: "Are" }, correctAnswer: "a" },
        { question: "Which sentence is correct?", answers: { a: "Maria haves a brown dog.   ", b: "Tom goes to work on Sundays.   ", c: "My parents does the shopping on Saturdays.  " }, correctAnswer: "b" },
        { question: "Which is the correct answer to this question?Does your sister work here?", answers: { a: "No, she doesn’t.   ", b: "Yes, she have.   ", c: "Yes, she do.   " }, correctAnswer: "a" },
        { question: "He ……… to his parents.", answers: { a: "not often writes", b: "doesn’t often write", c: "don’t often writes" }, correctAnswer: "b" },
        { question: "Jill: “Is Sam ready to go out?” Carol: “Yes. He ………on his coat .”", answers: { a: "put", b: "is put", c: "is putting" }, correctAnswer: "c" },
        { question: "Greg: “Did you get anything in town yesterday?”Tom: “Yes, I ……… the CD I wanted.”", answers: { a: "bought", b: "am buying", c: "was buying" }, correctAnswer: "a" },
        { question: "They’re old friends. He ……… her for years. Theywent to the same scholl.", answers: { a: "knows", b: "has known", c: "is knowing" }, correctAnswer: "c" },
        { question: "Joe: “Where’s Terry? He’s late .” Bob: “Don’t worry. Iexpect ……… here soon.”", answers: { a: "he’s", b: "he’ll", c: "he’ll be" }, correctAnswer: "c" },
        { question: "alternative to complete the sentence. He ’s not a vegetarian but doesn’t eat ……. meat .", answers: { a: "little", b: "much", c: "many" }, correctAnswer: "b" },
        { question: "(On the phone) Woman: “Can I speak to John,please?” Girl: “……. on, I’ll call him.”", answers: { a: "Come", b: "Wait", c: "Hold" }, correctAnswer: "c" },
        { question: "Sue: “……. do you see her?” Mark: “Twice a week.”", answers: { a: "How often", b: "How many", c: "How long" }, correctAnswer: "a" },
        { question: "If you’re ……. with watc hing tv, why don’t you go out for a walk?", answers: { a: "boring", b: "annoyed", c: "bored" }, correctAnswer: "c" },
        { question: " Jack remembered to post the letter, …….?", answers: { a: "does he", b: "didn’t he", c: "didn’t Jack remember" }, correctAnswer: "b" },
        { question: " Would you like to go out after dinner?", answers: { a: "Yes, I’m going out.", b: "No, I’m not hungry.", c: "Not really. I’m a bit tired." }, correctAnswer: "c" },
        { question: " (In a shop) This is enormous! Haven’t you got a smaller size?", answers: { a: "Yes, you are very big.", b: "Not in this colour.", c: "You should eat more." }, correctAnswer: "b" },
        { question: " How long does it take him to get to work?", answers: { a: "It depends on the traffic.", b: "Yes, he goes by train.", c: "Yes, he works a long time." }, correctAnswer: "a" },
        { question: " When are you leaving for the USA?", answers: { a: "Yes, I’m very excited about leaving.", b: "Last week.", c: "Next Tuesday morning." }, correctAnswer: "c" },
        { question: " Have you ever eaten Japanese food?", answers: { a: "No, never.", b: "I love Chinese food.", c: "No, I’m not hungry." }, correctAnswer: "a" },
        { question: " Shall I help you with those heavy shopping bags?", answers: { a: "I’m going shopping tomorrow.", b: "That’s very kind of you. Just put them on the kitchen table.", c: "Yes, I’ve done the shopping." }, correctAnswer: "b" },
        { question: " What ’s your new boss like?", answers: { a: "He doesn’t like the old boss.", b: "No, he isn’t like work.", c: "OK. Pleasant but very professional." }, correctAnswer: "c" },
        { question: " What did Tom say when he heard the bad news?", answers: { a: "Yes, he heard the news yesterday.", b: "Nothing. He was too shocked.", c: "Yes, he said something." }, correctAnswer: "b" },
        { question: " Woman:“……… before the train leaves?” Man: “About twenty minutes. Plenty of time for a ", answers: { a: "How long are you starting", b: "Are you starting", c: "When are you going to start" }, correctAnswer: "c" },
        { question: "The speaker will answer your questions when the presentation _____.", answers: { a: "finishes", b: "will finish", c: "finished" }, correctAnswer: "A" },
        { question: "Where _____ after you finish this lesson?", answers: { a: "did you go", b: "will you to go", c: "are you going" }, correctAnswer: "C" },
        { question: "While they _____ for the door to open, they saw a man by the window.", answers: { a: "wait", b: "were waiting", c: "were waited" }, correctAnswer: "B" },
        { question: "Ted: “What do you think of the Fun Fai r after all these years?” John: “Well, it really _____, these rides didn’t exist when I was a boy!'' ", answers: { a: "has changed", b: "changes", c: "changing" }, correctAnswer: "A" },
        { question: "Many scientists say that temperat ures_____ during the next 50 years.", answers: { a: "increase", b: "increased", c: "will increase" }, correctAnswer: "C" },
        { question: "He wants to change his job but there are ____ good reasons for him to stay where he is.", answers: { a: "a little", b: "a lot", c: "a few" }, correctAnswer: "C" },
        { question: "The people in the back couldn’t hear the presenter so they told him to _____ .", answers: { a: "speak up", b: "turn up", c: "go back" }, correctAnswer: "A" },
        { question: "That ’s the man ____ was ta lking behind me during the film!", answers: { a: "who", b: "which", c: "that he" }, correctAnswer: "A" },
        { question: "Trevor: “Did Geoff really drink champagne from the bottle at the party?” Alexia: “Yes, his manners were ____.”", answers: { a: "disgusted", b: "shocked", c: "disgusting" }, correctAnswer: "C" },
        { question: " When _____?", answers: { a: "did the telephone invent", b: "was the telephone invented", c: "is invented the telephone" }, correctAnswer: "B" },
        { question: " Good evening, Sir. May I take your order?", answers: { a: "No, I have no orders for you.", b: "I’ll have the lamb with a baked potato and asparagus please.", c: "I would like my dinner in a certain order." }, correctAnswer: "B" },
        { question: " Did you use the photocopier? I told you not to!", answers: { a: "Yes, I need a photocopier.", b: "The photocopier is in your office.", c: "I’m sorry, I just made one copy." }, correctAnswer: "C" },
        { question: " How would you like to pay for that , sir?", answers: { a: "Yes, I’d like to pay for it.", b: "I will pay as much as you like.", c: "Would a credit card be all right?" }, correctAnswer: "C" },
        { question: " Could you tell me if this bus stops in Bristol?", answers: { a: "Many people from Bristol take this bus.", b: "It passes through but I’m afraid it doesn’t stop.", c: "Bristol is a big town." }, correctAnswer: "B" },
        { question: " Excuse me, Miss Orton, could you come into my office?", answers: { a: "I’m very busy; could it wait one moment?", b: "I have no excuse for my office.", c: "Yes, I came to your office yesterday." }, correctAnswer: "A" },
        { question: " It’s really a great party Jed, but why didn’t Mike come tonight?", answers: { a: "Mike and Jed never go to parties.", b: "Yes, when Mike doesn’t come, it’s great.", c: "I’m afraid he wasn’t feeling very well." }, correctAnswer: "C" },
        { question: " How was your summer school course in London?", answers: { a: "Summers in London are cold.", b: "Yes, of course it was in London.", c: "A bit disappointing, I’m sorry to say." }, correctAnswer: "C" },
        { question: " Is there anything on at the cinema tonight?", answers: { a: "I haven’t checked.", b: "The cinema is on the corner.", c: "We can do anything." }, correctAnswer: "A" },
        { question: " Choose the correct alternatives to complete the questions. Man: “________ during the week? Woman : “Generally about 7:30 but sometimes a bit earlier.”", answers: { a: "Where do you go", b: "What time do you get up", c: "When do you go" }, correctAnswer: "B" },
        { question: " Man: “______ to get here?” Woman : “Hours! There was a lot of traffic.”", answers: { a: "How long did it take you", b: "How time it took you", c: "How much time it wanted" }, correctAnswer: "A" },
        { question: " Teacher: “________ when I came into the classroom?” Student: “I was just asking Gary a question about the test.”", answers: { a: "What do you do", b: "Who did you ask", c: "What were you doing" }, correctAnswer: "C" },
        { question: " Man: “________ go? I enjoy ta lking to you.” Woman : “I’m sorry, but I have an appointment.”", answers: { a: "Shall you", b: "Can you", c: "Do you have to" }, correctAnswer: "C" }
    ]
    const quiz_b1 = [
        {question: "John ……. me to lend him money! It’s so annoying.",answers: {a: "asks always",b: "always is asking",c: "is always asking",d: "had been always asking"},correctAnswer: "C"},
        {question: "It …….. when I got up this morning, so I stayed at home.",answers: {a: "was raining",b: "has rained",c: "has been raining",d: "would rain"},correctAnswer: "A"},
        {question: "I apologise for the mess. I ……. time to clear up after lunch yet.",answers: {a: "wasn’t having",b: "hadn’t had",c: "don’t have",d: "haven’t had"},correctAnswer: "D"},
        {question: "Where do you think …… in twenty years’ time?",answers: {a: "are you going to be",b: "you will be",c: "you are being",d: "will you be"},correctAnswer: "B"},
        {question: "She knew a little Spanish so she ……… to explain her problem to the police in Madrid.",answers: {a: "can",b: "could",c: "was able",d: "succeeded"},correctAnswer: "C"},
        {question: "Sam, ……… wife works with me, is going to the US on business.",answers: {a: "whose",b: "who’s",c: "who",d: "which"},correctAnswer: "C"},
        {question: "Mr Thompson’s wallet ……… while he was travelling on the Underground yesterday.",answers: {a: "stole",b: "was robbed",c: "robbed",d: "was stolen"},correctAnswer: "A"},
        {question: "I ……… a new car this year if I were you.",answers: {a: "won’t buy",b: "wouldn’t buy",c: "didn’t buy",d: "haven’t bought"},correctAnswer: "D"},
        {question: " He ……… tea with milk during his stay in the UK three years ago.",answers: {a: "used to drinking",b: "got used to drink",c: "was used to drink",d: "got used to drinking"},correctAnswer: "B"},
        {question: " They made a mistake when they added up the total. A mistake …….. when they added up the total.",answers: {a: "has made",b: "was made",c: "was been made",d: "is made"},correctAnswer: "D"},
        {question: " She was angry and put down the telephone receiver before he had finished speaking. She was angry and …….. up before he had finished speaking.",answers: {a: "hung",b: "got",c: "brought",d: "hold"},correctAnswer: "B"},
        {question: " Thieves used force to enter the house while they were away. Thieves …….. into the house while they were away.",answers: {a: "have been",b: "were forced",c: "kept",d: "broke"},correctAnswer: "A"},
        {question: " “Where are you going to stay when you go to London?” Tom asked her. Tom asked her where …….. to London.",answers: {a: "was she going to stay when she went",b: "did she stay when she goes",c: "she was going to stay when she went",d: "you are going to stay when she goes"},correctAnswer: "D"},
        {question: " “OK. I’ll do it for you,” Sheila told him. Sheila agreed …….. for him.",answers: {a: "doing it",b: "to do it",c: "that to do it",d: "that she is doing it"},correctAnswer: "C"},
        {question: " I’m not sure this is my size. Can I put it on to see if it fits? I’m not sure this is my size. Can I try …….. to see if it fits?",answers: {a: "on it",b: "it up",c: "it on",d: "out it"},correctAnswer: "B"},
        {question: " The brochures are produced by a printer. A printer …….. the brochures.",answers: {a: "produces",b: "is produced",c: "are producing",d: "has been produced"},correctAnswer: "C"},
        {question: " He began driving six hours ago. He ………",answers: {a: "has driven since six hours",b: "has been driving for six hours",c: "has been driving for six hours ago",d: "is driving for six hours"},correctAnswer: "A"},
        {question: " The soldiers obeyed the officer’s orders. The soldiers …….. out the officer’s orders.",answers: {a: "put",b: "carried",c: "got",d: "took"},correctAnswer: "B"},
        {question: " Although he had little money, he offered to pay for her lunch. In spite …….. little money, he offered to pay for her lunch.",answers: {a: "of have",b: "to have",c: "he had",d: "of having"},correctAnswer: ""},

    ]
    const quiz_b2 =[
        {question: "Everybody’s left the building, ……….?",answers: {a: "doesn’t he",b: "haven’t they",c: "don’t they",d: "isn’t it"},correctAnswer: "B"},
        {question: "The furniture was moved while some shelves ………… on the wall.",answers: {a: "were putting up",b: "are put up",c: "have been put up",d: "were being put up"},correctAnswer: "D"},
        {question: "………… it was late, he decided to call her.",answers: {a: "However",b: "Though",c: "In spite of",d: "Nevertheless"},correctAnswer: "B"},
        {question: "The long truck carrying the airplane travelled by night ………… daytime traffic.",answers: {a: "so that not slowed down",b: "for not slowing down",c: "so as not to slow down",d: "because of not slowing down"},correctAnswer: "C"},
        {question: "She regretted not accepting the promotion, even if it would have meant ………… to another town.",answers: {a: "moving",b: "to move",c: "move",d: "that she moves"},correctAnswer: "A"},
        {question: "While we are putting up the decorations tomorrow afternoon, she ……….. some party food.",answers: {a: "has prepared",b: "prepares",c: "will be preparing",d: "will have prepared"},correctAnswer: "C"},
        {question: "He can’t be blamed ………… to phone, he’s got a lot on his mind.",answers: {a: "of forgetting",b: "for forgetting",c: "to forget",d: "with forgetting"},correctAnswer: "B"},
        {question: "He was made …………. up the mess in the kitchen after he attempted to make a cake.",answers: {a: "clearing",b: "clear",c: "that he cleared",d: "to clear"},correctAnswer: "D"},
        {question: "By the time they arrive next Saturday, we …………. painting the guest room.",answers: {a: "are finishing",b: "finish",c: "had finished",d: "will have finished"},correctAnswer: "D"},
        {question: " You …………. your uncle. He died a year before you were born.",answers: {a: "shouldn’t have met",b: "mustn’t have met",c: "can’t have met",d: "might not have met"},correctAnswer: "C"},
        {question: " I think it’s time they ………….. me a rise!",answers: {a: "will give",b: "are giving",c: "would give",d: "gave"},correctAnswer: "D"},
        {question: " The castle …………. to the public since it was declared unsafe.",answers: {a: "has been closed",b: "was closed",c: "had been closed",d: "is closed"},correctAnswer: "A"},
        {question: " It was very kind of you, but you …………. a meal for us. We could have gone to a restaurant.",answers: {a: "mustn’t have cooked",b: "could have cooked",c: "needn’t have cooked",d: "didn’t need to cook"},correctAnswer: "C"},
        {question: " She doesn’t …………. looking after the baby for us next Saturday, does she?",answers: {a: "stand",b: "mind",c: "object",d: "regret"},correctAnswer: "B"},
        {question: " You …………. your uncle. He died a year before you were born.",answers: {a: "shouldn’t have met",b: "mustn’t have met",c: "can’t have met",d: "might not have met"},correctAnswer: "D"},
        {question: " I think it’s time they ………….. me a rise!",answers: {a: "will give",b: "are giving",c: "would give",d: "gave"},correctAnswer: ""},
        {question: " The castle …………. to the public since it was declared unsafe.",answers: {a: "has been closed",b: "was closed",c: "had been closed",d: "is closed"},correctAnswer: ""},
        {question: " It was very kind of you, but you …………. a meal for us. We could have gone to a restaurant.",answers: {a: "mustn’t have cooked",b: "could have cooked",c: "needn’t have cooked",d: "didn’t need to cook"},correctAnswer: ""},
        {question: " She doesn’t …………. looking after the baby for us next Saturday, does she?",answers: {a: "stand",b: "mind",c: "object",d: "regret"},correctAnswer: "D"}
    ]
    var queryString = location.search.substring(1);
    if(queryString == "A1"){
        all_questions = quiz_a1 ;
    }
    else
    if(queryString == "A2"){
        all_questions = quiz_a2 ;
    }
    else
    if(queryString == "B1"){
        all_questions = quiz_b1 ;
    }
    else
    if(queryString == "B2"){
        all_questions = quiz_b2 ;
    }
    const myQuestions = all_questions.slice(0, 10);
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
