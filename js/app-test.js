const dom = {
testName:document.getElementById('test-name'),
questionBlockirovka: document.getElementById('question-blockirovka'),
testManual: document.getElementById('test-manual'),
numOfQue: document.getElementById('all-quatity-questions'),
questionNumber: document.getElementById('question-number'),
question: document.getElementById('question'),
answers: document.getElementById('answers'),
nextButton: document.getElementById('next-button'),
result: document.getElementById('result'),
resultIcon: document.getElementById('result-icon'),
resultStatus: document.getElementById('result-status'),
startBtn: document.getElementById('start-test-btn'),
}
// Глобальные переменные и переменные настроек теста
let  questionIndex = 1;
let isSelectAnswer = false;
let rightAnswersCount = 0;
const answersCountForTeestComplete = 3;
const questionCount = 6;


  const questionGo = document.querySelector('.test__question');
  const btnGo = document.querySelector('.test__button');
  const answersGo = document.querySelector('.test__answers');
//Функция запуск теста 
dom.startBtn.addEventListener('click', () => {
  dom.startBtn.style.display = "none"
  const questionGo = document.querySelector('.test__question');
  const btnGo = document.querySelector('.test__button');
  const answersGo = document.querySelector('.test__answers');
  questionGo.classList.remove('_startQ')
  btnGo.classList.remove('_startQ')
  answersGo.classList.remove('_startQ') 
})


//Функция рандомной пересортировки массива 
function randomArray(arr, count) {
  let randomArray = []
  while (arr.length && randomArray.length < count) {
    const maxIndex = arr.length -  1;
    const randomIndex = Math.random() * maxIndex
    const integerIndex = Math.round(randomIndex)
    // const integerIndex = Math.floor(randomIndex) - можно копуглять спомощью методда флур
    const cutQuestion = arr.splice(integerIndex, 1)
    randomArray = randomArray.concat(cutQuestion)
  }
  
  return randomArray;

}

const newQueArray = randomArray(queData.questions, questionCount)


// функция  вывода вопроса

// function renderQuestion(question, questionNumber){
//   dom.questionNumber.innerHTML = questionNumber
//   dom.question.innerHTML = question
// }
// функция  вывода вариантов ответов

function renderAnswers(answers, rightAnswerNum){
  const answersHtml = [];

  for (let i = 0; i < answers.length;i++){
    if (i+1  === rightAnswerNum){
      answersHtml.push(`<div class='test__answer' data-valid>${answers[i]}</div>`)
    }else {
      answersHtml.push(`<div class='test__answer'>${answers[i]}</div>`)
    }
  }

  dom.answers.innerHTML = answersHtml.join('')
}
const  answers = newQueArray[0].answers
const rightAnswerNum = newQueArray[0].rightAnswer

// Отрисовка вопроса с ответами

function renderQuestionWithAnswers(data, questionNumber){
  const {answers, rightAnswer} = data
  dom.question.innerHTML = data.question
  dom.questionNumber.innerHTML = questionNumber
  renderAnswers(answers, rightAnswer)
  blockButton(true)
}

renderQuestionWithAnswers(newQueArray[0], 1)

// Отслеживание клик по кнопке перехода к следуюзему вопросу

dom.nextButton.onclick = () => {
  const question = newQueArray[questionIndex]
  const nextQuestion = newQueArray[questionIndex + 1];
  const questionNumber = questionIndex + 1
  if (question) {
  renderQuestionWithAnswers(question, questionNumber)
  questionIndex++
  isSelectAnswer = !isSelectAnswer
  if (nextQuestion === undefined) {
    changeButtonToResult()
  }
  } else {
    renderResult()
  }
}

// Отслеживаем клик по ответу

dom.answers.onclick = (event) => {
  const isAnswerClick = event.target.classList.contains('test__answer')
  if (isAnswerClick && !isSelectAnswer){
    checkAnswers(event.target);
    isSelectAnswer = !isSelectAnswer
    blockButton(false)
  }
}


// Функция открисовки статусов,верный или не верный

function checkAnswers(answer){
  const isValid = answer.dataset.valid !== undefined


  if (isValid)  {
    answer.classList.add('valid-answer')
    rightAnswersCount++
  } else {
    const validAnsver = answer.parentNode.querySelector('[data-valid]')
    answer.classList.add('invalid-answer')
    validAnsver.classList.add('valid-answer')
  }
}

// Функция блокировки / разблокировки кнопки
function  blockButton(isDisable) {
  if (isDisable) {
    dom.nextButton.classList.add('disable_next-btn');
  } else {
    dom.nextButton.classList.remove('disable_next-btn');
  }
}

// Изменение кнопки (на *посмотреть результат*)
function changeButtonToResult() {
  dom.nextButton.innerHTML = 'Посмотреть результаты'
  dom.nextButton.dataset.result = true
}

// Функция Вывода результатов опроса
function renderResult() {
  dom.questionBlockirovka.style.display = 'none';
  dom.answers.style.display = 'none';
  dom.numOfQue.style.display = 'none';
  dom.testManual.style.display = 'none';
  dom.result.style.display = 'block';
  dom.nextButton.dataset.result = false
  dom.nextButton.innerHTML = ' Попробовать еще раз'
  
  if (testCompleteCorrect()) {
    dom.resultIcon.innerHTML = '🎉';
    dom.resultStatus.innerHTML = 'Тест пройден!';
    dom.resultStatus.classList.add('valid');
    dom.nextButton.onclick = () => {
      location.reload();
    }
  } else {
    dom.resultIcon.innerHTML = '😢';
    dom.resultStatus.innerHTML = 'Тест не пройден!';
    dom.resultStatus.classList.add('invalid');
    dom.nextButton.onclick = () => {
      location.reload();
    }
    }

  }


// Функция проверкаёи резульата теста

function testCompleteCorrect()  {
    return answersCountForTeestComplete <= rightAnswersCount
}

//Функция повтора  теста
// function replaceTest(){
// }