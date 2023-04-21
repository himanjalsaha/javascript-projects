const computerchoicedisplay=document.getElementById('computer-choice')
const userchoicedisplay=document.getElementById('User-choice')
const resultdisplay = document.getElementById('result')
const possiblechoices=document.querySelectorAll('button')
let userchoice
let computerchoice
let result
possiblechoices.forEach(possiblechoices => possiblechoices.addEventListener('click', (e) =>{
userchoice= e.target.id
userchoicedisplay.innerHTML = userchoice
generateComputerChoice()
getresult()
}))

function generateComputerChoice(){
    const randomnumber=Math.floor((Math.random() * 3)+1)
    if (randomnumber===1){
        computerchoice= 'rock✊'
    }
    if (randomnumber===2){
        computerchoice= 'paper🖐️'
    }
    if (randomnumber===3){
        computerchoice= 'scissors✌️'
    }
    computerchoicedisplay.innerHTML=computerchoice
}

function getresult(){
    if (computerchoice===userchoice){
        result='Draw'
    }
    if (computerchoice === 'rock✊' && userchoice === "paper🖐️") {
        result = 'you win!'
      }
      if (computerchoice === 'rock✊' && userchoice === "scissors✌️") {
        result = 'you lost!'
      }
      if (computerchoice === 'paper🖐️' && userchoice === "scissors✌️") {
        result = 'you win!'
      }
      if (computerchoice === 'paper🖐️' && userchoice === "rock✊") {
        result = 'you lose!'
      }
      if (computerchoice === 'scissors✌️' && userchoice === "rock✊") {
        result = 'you win!'
      }
      if (computerchoice === 'scissors✌️' && userchoice === "paper🖐️") {
        result = 'you lose!'
      }
    resultdisplay.innerHTML=result

    



}




