'use strict';

// This app uses two global variables, QUESTIONS and tracker.
// Questions is an array of objects containing all the data needed to render each question.
const QUESTIONS = [
  {
    dataIndex: 1, 
    question: 'Wolfgang Amadeus Mozart was born in Salzburg, Austria in 1756 to mother Anna Maria and father Leopold, who worked as a:',
    answers: ['Carpenter', 'Chimney sweep', 'Music teacher', 'Physician'],
    correctAnswer: 'Music teacher',
    image: 'http://i63.tinypic.com/33nfabt.jpg',
    imageAlt: 'A portrait of young Mozart', 
    explanation: `Leopold eventually gave up on composing when he realized his son’s musical talent far exceeded his own.`
  },
  {
    dataIndex: 2, 
    question: 'From 1763 - 1766 (Mozart was age 7-10), the Mozart family:',
    answers: ['Became impoverished, and Leopold and Wolfgang had to find work with a music publisher', 'Went on a musical tour of Europe performing for the public and wealthy aristocrats', 'Moved eight times to multiple cities throughout Austria', 'Had to share their apartment with relatives who tormented young Wolfgang'],
    correctAnswer: 'Went on a musical tour of Europe performing for the public and wealthy aristocrats', 
    explanation: 'Wanting to display the miraculous musical abilities of Wolfgang and his sister Nannerl and inspired by a successful visit to Empress Maria Theresa, the Mozart family performed private concerts for delighted princes and princesses as well as public concerts to rave reviews. <br><br>The family tours introduced Wolfgang to the world and gave him an invaluable education and powerful connections, yet the rough practicalities of the touring life at his young age may have contributed to his early death.',
    image: `http://i64.tinypic.com/2607rwm.jpg`,
    imageAlt: `Portrait of young Mozart greeting Madame Pompadour`
  },
  {
    dataIndex: 3, 
    question: `Mozart wrote his first symphony when he was 8 years old. Mozart’s first opera, Bastien und Bastienne, premiered when he was __ years old:`,
    answers: ['12','16','18','21'],
    correctAnswer: '12', 
    explanation: `He also composed his first great mass that year - the Misa Brevis in G`,
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/MozartVeronadallaRosa.jpg/245px-MozartVeronadallaRosa.jpg`,
    imageAlt: `Portrait of young Mozart at the keyboard`
  
  },
  {
    dataIndex: 4, 
    question: `After returning from a tour of Italy with his father, Mozart found gainful employment as a court musician for the Prince-Archbishop of Salzburg. Although he composed prodigiously and his skills improved, he eventually resigned because:`,
    answers: [`The Prince-Archbishop coveted Mozart’s abilities but personally loathed the boyish prodigy, making life unbearable`,`Mozart’s forward-looking, popular style insulted the refined musical tastes of the aristocracy`,`His passion was for writing opera, which was very rarely performed in Salzburg`,`Mozart was not allowed to perform outside of the court`],
    correctAnswer: `His passion was for writing opera, which was very rarely performed in Salzburg`, 
    explanation: `Mozart traveled to Munich in early 1775 and had his first real operatic success with "La finta giardiniera." Even in Germany, the cultured elite preferred opera written in Italian, and his trips to Italy sparked his imagination and interest in writing operas. In addition to his budding love of opera, Mozart also hated his low salary as a court musician.`,
    image: `http://i67.tinypic.com/14ebcsl.jpg`,
    imageAlt: `A staging of Mozart's La Clemenza di Tito`
  },
  {
    dataIndex: 5, 
    question: `Mozart was an active member of which secret society:`,
    answers: [`Freemasons`,`Illuminati`,`Knights Templar`,`Rotary Club`],
    correctAnswer: `Freemasons`, 
    explanation: `According to Austrian musicologist Otto Deutsch, the Freemason lodge to which Mozart belonged was “the largest and most aristocratic in Vienna … Mozart, as the best of the musical ‘Brothers,’ was welcome in all the lodges.” Freemason symbology and philosophy plays a role in many of Mozart’s works, but most notably in his last opera, Die Zauberflöte.`,
    image: `http://i63.tinypic.com/qx29t4.jpg`,
    imageAlt: `Freemason symbols in a staging of Mozart's The Magic Flute`
  },
  {
    dataIndex: 6, 
    question: `Which young composer famously came to Vienna to meet with Mozart?`,
    answers: [`Giacomo Puccini`,`Antonio Salieri`,`Christoph Willibald Gluck`,`Ludwig van Beethoven`],
    correctAnswer: `Ludwig van Beethoven`, 
    explanation: `During his youth and musical training in Bonn, Beethoven had extensive exposure to Mozart's music. Reports conflict as to the extent of their relationship: some say they met briefly, one says Beethoven studied with Mozart for two weeks, and one even claims he may have auditioned for and was rejected by Mozart, and some claim they never met at all.`,
    image: `https://images-na.ssl-images-amazon.com/images/I/517COL1rDML._SS500.jpg`,
    imageAlt: `Mozart versus Beethoven CD cover`
  },
  {
    dataIndex: 7, 
    question: `During Mozart’s early years in Vienna, Mozart’s employer, the Archbishop Colloredo, prohibited him from taking work outside his court, and even made Mozart dine with his other valets and cooks, treating him like any of his other servants. A resentful Mozart attempted to resign and was initially refused, but a month later, the Archbishop granted permission to leave his service, but only after:`,
    answers: [`Making Mozart write him a new opera`,`Promising the Archbishop a tithe of 10% of his pay for the next ten years`,`Mozart found compromising documents about the Archbishop’s finances`,`A swift kick in the butt`],
    correctAnswer: `A swift kick in the butt`, 
    explanation: `With a hard blow administered by the Archbishop’s steward Count Arco, Mozart was literally kicked out of service in May 1781.`,
    image: `http://i65.tinypic.com/1zxozll.gif`,
    imageAlt: `Homer Simpson getting kicked out of Moe's`
  },
  {
    dataIndex: 8, 
    question: `Which of these composers became close personal friends with Mozart?`,
    answers: [`Joseph Haydn`,`Johann Sebastian Bach`,`Giuseppe Verdi`,`Richard Wagner`],
    correctAnswer: `Joseph Haydn`, 
    explanation: `Mozart and Haydn met in Vienna, where they quickly became friends and sometimes played together in impromptu string quartets. Mozart wrote six quartets dedicated to Haydn, and in 1785 Haydn told Mozart’s father Leopold: “I tell you before God, and as an honest man, your son is the greatest composer known to me by person and repute, he has taste and what is more the greatest skill in composition.”`,
    image: `http://i66.tinypic.com/2up8pcm.jpg`,
    imageAlt: `Portrait of Joseph Haydn`
  },
  {
    dataIndex: 9, 
    question: `Mozart’s most fruitful operatic collaborations took place with which famous librettist:`,
    answers: [`Voltaire`,`Pietro Metastasio`,`Giulio Strozzi`,`Lorenzo Da Ponte`],
    correctAnswer: `Lorenzo Da Ponte`, 
    explanation: `Mozart collaborated with librettist Lorenzo Da Ponte for three of the greatest operas in the entire canon: Le nozze di Figaro, Don Giovanni, and Così fan tutte. When they first met in 1783, Mozart was starstruck.. About seven years older than Mozart, Da Ponte was a superstar, at that time ironically best known for composing librettos for Antonio Salieri. As a Catholic priest, Da Ponte took a mistress with whom he fathered two children, and he was subsequently banished from Venice for 15 years.`,
    image: `http://i65.tinypic.com/2sbk2v8.jpg`,
    imageAlt: `Don Giovanni at the Arena di Verona`
  },
  {
    dataIndex: 10, 
    question: `Mozart died in his home on December 5th, 1781 at age 35. He was buried:`,
    answers: [`In a mass grave`,`In a common grave`,`At Schloss Schönbrunn, the Viennese palace`,`Mozart was cremated`],
    correctAnswer: `In a common grave`, 
    explanation: `The New Grove Dictionary of Music and Musicians describes Mozart’s funeral: “Mozart was interred in a common grave [refers not to a communal grave, but a grave for a commoner, not a noble], in accordance with contemporary Viennese custom ... Jahn (1856) wrote that Salieri, Süssmayr, van Swieten and two other musicians were present. The tale of a storm and snow is false; the day was calm and mild.”`,
    image: `https://upload.wikimedia.org/wikipedia/commons/8/8a/Wien-Mozart-Denkmal_02.JPG`,
    imageAlt: `Mozart memorial statue in Vienna`
  }
];

// tracker keeps track of the user's score as well as the index of the current question
const tracker = {
  correct: 0,
  incorrect: 0,
  count: 0
};

// Dynamically generate the next page
function generateQuestion(questionObject) {
  return `<header role="banner">
  <h1>Question ${questionObject.dataIndex}</h1>
  </header>
  <main>
  <form id="question-form" action="">
    <fieldset>
      <legend>${questionObject.question}</legend>
      <div class="radio-group-wrap">` +
        populateRadio() + `
      </div>
    </fieldset>
    <button type="submit" id="submit-answer" value="here's the value">Submit Answer</button>
  </form>
  </main>`
}

function populateRadio() {
  let result = ``;
  for (let i = 0; i < QUESTIONS[tracker.count].answers.length; i++) { 
    result = result + `<div class="radio-element-wrap">
    <input required type="radio" name="question" id="q${i+1}" value="${QUESTIONS[tracker.count].answers[i]}">
      <label for="q${i+1}">${QUESTIONS[tracker.count].answers[i]}</label>
    </div>`;
  }
  return result;
}

function generateResultsCorrect(questionObject) {
  return `<header role="banner">
  <h1 class="correct">Correct!</h1>
</header>
<main>
  <img class="explanation-img" alt="${QUESTIONS[tracker.count].imageAlt}" src="${QUESTIONS[tracker.count].image}"/>
  <p class="explanation">${questionObject.explanation}</p>
  <h3><span class="correct-text">${tracker.correct}</span> correct, <span class="incorrect-text">${tracker.incorrect}</span> incorrect</h3>
  <button>Next question</button>
</main>`
}

function generateResultsIncorrect(questionObject) {
  return `<header role="banner">
  <h1 class="incorrect">Surprise!</h1>
</header>
<main>
  <h2>The correct answer is: <span class="correct-text">${questionObject.correctAnswer}</span></h2>
  <img class="explanation-img" alt="${QUESTIONS[tracker.count].imageAlt}" src="${QUESTIONS[tracker.count].image}"/>
  <p class="explanation">${questionObject.explanation}</p>
  <h3><span class="correct-text">${tracker.correct}</span> correct, <span class="incorrect-text">${tracker.incorrect}</span> incorrect</h3>
  <button>Next question</button>
</main>`
}

function generateFinalResult() {
  return `<header role="banner">
    <h1>Well Played!</h1>
  </header>
  <main>
    <img class="banner-img" alt="Mozart with 'deal with it' shades" src="http://i66.tinypic.com/25sy41w.jpg">
    <h2>Your final results:</h2>
    <h3><span class="correct-text">${tracker.correct}</span> correct, <span class="incorrect-text">${tracker.incorrect}</span> incorrect</h3>
    <button>Try again</button>
  </main>`
}

// Render pages using generators
function renderQuestion() {
  $('body').html(generateQuestion(QUESTIONS[tracker.count]));
}

function renderCorrect() {
  $('body').html(generateResultsCorrect(QUESTIONS[tracker.count]));
}

function renderIncorrect() {
  $('body').html(generateResultsIncorrect(QUESTIONS[tracker.count]));
}

function renderFinalResult() {
  $('body').html(generateFinalResult());
}

// Set event handlers
function questionHandler() {
  $('form').submit((event) => {
    event.preventDefault();

    let userAnswer = $('input[name=question]:checked').val();
    let correctAnswer = QUESTIONS[tracker.count].correctAnswer;

    if (userAnswer === correctAnswer) {
      tracker.correct++;
      renderCorrect();
      resultHandler();
    } else {
      tracker.incorrect++;
      renderIncorrect();
      resultHandler();
    }
  });
}

function resultHandler() {
  $('button').click((event) => {
    event.preventDefault();
    if (tracker.count === 9) {
      renderFinalResult();
      finalHandler();
    } else {
      tracker.count++;
      renderQuestion();
      questionHandler();
    }
  });
}

function finalHandler() {
  $('button').click((event) => {
    event.preventDefault();
    // reset tracker
    tracker.count = 0;
    tracker.correct = 0;
    tracker.incorrect = 0;
    renderQuestion();
    questionHandler();
  });
}

function initialHandler() {
  $('#start-button').click((event) => {
    event.preventDefault();
    renderQuestion();
    questionHandler();
  });
}

// Initialize
initialHandler();