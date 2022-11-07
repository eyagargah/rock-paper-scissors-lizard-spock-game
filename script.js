const Close_Modal_Btn = document.querySelector(".closeBtn");
const Rules_Modal = document.querySelector(".modal");
const Open_Rules_Btn = document.querySelector(".openModalBtn");

const userChoiceDisplay = document.querySelector(".user-pick");
const houseChoiceDisplay = document.querySelector(".house-pick");
const resultDisplay = document.querySelector(".result");
const resultExplanation = document.querySelector(".explanation");
const game = document.querySelector(".game");
const gameBtns = game.querySelectorAll("input");
const userChoiceBtn = document.querySelector(".user-picked-display")
const houseChoiceBtn = document.querySelector(".house-picked-display")
const playAgainDiv = document.querySelector(".playAgain")
let userChoice;
let houseChoice;


gameBtns.forEach((gameBtn) => {
  gameBtn.addEventListener("click", (e) => {
    game.classList.add('hidden')
    userChoice = getUserChoice(e.target)
    houseChoice = generateHouseChoice()
    getResult()
    createReplayBtn()

    /* game.classList.add('hidden')
    getResult(); */
  });
});
function createReplayBtn(){
  var playAgainBtnDisplay = document.createElement('button')
  playAgainBtnDisplay.setAttribute('class', 'replayBtn');  
  playAgainBtnDisplay.textContent = 'Play Again';
  playAgainDiv.append(playAgainBtnDisplay)
  var playAgainBtn = document.querySelector(".replayBtn")
  
}
function replay(){
  

}

function getUserChoice(target){
    if(target.tagName = 'INPUT')
    {
      var newTarget = target
      userChoiceDisplay.append(newTarget)
        return target.id
    }
    return target.id
}
function generateHouseChoice() {
  const randomNumber = Math.floor(Math.random() * gameBtns.length);
  houseChoice = gameBtns[randomNumber].id;
  var housePick = document.getElementById(houseChoice)
  houseChoiceDisplay.append(housePick)
  return houseChoice
}

function getResult() {
  switch (userChoice + houseChoice) {
    case "scissorspaper":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " cuts " + houseChoice;
      break;
    case "scissorslizard":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " decapitates " + houseChoice;
      break;
    case "spockscissors":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " smashes " + houseChoice;
      break;
    case "spockrock":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " vaporizes " + houseChoice;
      break;
    case "lizardpaper":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " eats " + houseChoice;
      break;
    case "lizardspock":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " poisons " + houseChoice;
      break;
    case "rocklizard":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " crushes " + houseChoice;
      break;
    case "rockscissors":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " crushes " + houseChoice;
      break;
    case "paperrock":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " covers " + houseChoice;
      break;
    case "paperspock":
      resultDisplay.innerHTML = "You Win";
      resultExplanation.innerHTML = userChoice + " disapproves " + houseChoice;
      break;
    case "paperscissors":
    case "lizardscissors":
    case "scissorsspock":
    case "rockspock":
    case "paperlizard":
    case "spocklizard":
    case "lizardrock":
    case "scissorsrock":
    case "rockpaper":
    case "spockpaper":
      resultDisplay.innerHTML = "You Lose";
      break;
    case "scissorsscissors":
    case "spockspock":
    case "lizardlizard":
    case "rockrock":
    case "paperpaper":
      resultDisplay.innerHTML = "It's a Tie!";
      break;
  }
}

/*Modal control */
Open_Rules_Btn.addEventListener("click", () => {
  Rules_Modal.classList.remove("close");
  Rules_Modal.classList.add("open");
});

Close_Modal_Btn.addEventListener("click", () => {
  Rules_Modal.classList.remove("open");
  Rules_Modal.classList.add("close");
});
