const Close_Modal_Btn = document.querySelector('.closeBtn')
const Rules_Modal = document.querySelector('.modal')
const Open_Rules_Btn = document.querySelector('.openModalBtn')

const userChoiceDisplay = document.querySelector('.user-pick')
const houseChoiceDisplay = document.querySelector('.house-pick')
const scoreDisplay = document.querySelector('.score')
const game = document.querySelector('.game')
const gameBtns = game.querySelectorAll('input')

let userChoice
gameBtns.forEach(gameBtn => {
    addEventListener('click', (e)=>{
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateHouseChoice()
        scoreDisplay.innerHTML = getResult()
    })
    
});
let houseChoice
function generateHouseChoice(){
    const randomNumber = Math.floor(Math.random() * gameBtns.length)
    houseChoice = gameBtns[randomNumber].id
    houseChoiceDisplay.innerHTML = houseChoice
    
}

function getResult(){
    let result 
    if(userChoice=== houseChoice){
        result ='Its a Tie'
    }
    if(userChoice=== houseChoice){
        result ='Its a Tie'
    }
    if(userChoice=== houseChoice){
        result ='Its a Tie'
    }
    return result
}



/*Modal control */
Open_Rules_Btn.addEventListener('click',()=>{
    Rules_Modal.classList.remove('close')
    Rules_Modal.classList.add('open')
})

Close_Modal_Btn.addEventListener('click',()=>{
    Rules_Modal.classList.remove('open')
    Rules_Modal.classList.add('close')
})