function game(){
const winningCombos = ['scissorspaper', 'paperrock', 'rocklizard', 'lizardspock', 'spockscissors',
'rockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock']
const userChoiceDisplay = document.querySelector(".user-pick");
const houseChoiceDisplay = document.querySelector(".house-pick");
const resultDisplay = document.querySelector(".result");
const choiceDisplay = document.querySelector(".choice");
const game = document.querySelector(".game");
const gameBtns = game.querySelectorAll("input");
const playAgainBtn = document.querySelector(".playAgain")
const scoreDisplay = document.querySelector('.score')
let userChoice, houseChoice;

window.addEventListener("load", () => {
  getLastScoreFromLocalStorage();

  gameBtns.forEach((gameBtn) => {
    gameBtn.addEventListener("click", (e) => {
      game.classList.add("hidden");
      choiceDisplay.classList.remove("hidden");
      userChoice = getUserChoice(e.target);
      houseChoice = generateHouseChoice();
      
      startGame()
  
      
    });
  });
  console.log(resultDisplay)
  playAgainBtn.addEventListener('click', ()=>{
    game.classList.remove("hidden")
    choiceDisplay.classList.add("hidden")
  })
});


function startGame(){
  getResult(userChoice, houseChoice)

  clearChoices()
  buildChoiceElement(true,userChoice)
  buildChoiceElement(false,houseChoice)

}


/*Build choices section */
function getUserChoice(target) {
  if ((target.tagName = "INPUT")) {
    return target.id;
  }
  return target.id;
}


function generateHouseChoice() {
  const randomNumber = Math.floor(Math.random() * gameBtns.length);
  houseChoice = gameBtns[randomNumber].id;
  return houseChoice;
}

function buildChoiceElement(isUserChoice , userChoice){
  const element = document.createElement('input')
  element.type = "image"
  element.src = `images/icon-${userChoice}.svg`
  element.id = userChoice
  if(isUserChoice){
    userChoiceDisplay.append(element)
  }else{
    houseChoiceDisplay.append(element)
  }

}

/*Result of each case */
function getResult(userChoice,houseChoice) {
  if (userChoice === houseChoice) {
    resultDisplay.innerText = " It's a Tie";
} else if (getUserWinsStatus(userChoice + houseChoice)) {
  resultDisplay.innerText = 'You win';
    calculateScore(1);
} else {
  resultDisplay.innerText = 'You lose';
    calculateScore(-1);
}
  }


function getUserWinsStatus(result){
  return winningCombos.some( winningCombo => winningCombo === result )
}


function clearChoices(){
  userChoiceDisplay.innerHTML= ''
  houseChoiceDisplay.innerHTML =''
}
function calculateScore(roundScore){
  currentScore += roundScore
  updateScoreDisplay()
}



function getLastScoreFromLocalStorage() {
  let score = +window.localStorage.getItem('gameScore') || 0
  currentScore = score;
  updateScoreDisplay()
}



function updateScoreDisplay(){
  scoreDisplay.innerHTML = currentScore
  window.localStorage.setItem('gameScore', currentScore)
}

/*Modal control */
const Close_Modal_Btn = document.querySelector(".closeBtn");
const Rules_Modal = document.querySelector(".modal");
const Open_Rules_Btn = document.querySelector(".openModalBtn");


Open_Rules_Btn.addEventListener("click", () => {
  Rules_Modal.classList.remove("close");
  Rules_Modal.classList.add("open");
});

Close_Modal_Btn.addEventListener("click", () => {
  Rules_Modal.classList.remove("open");
  Rules_Modal.classList.add("close");
});
}

game()