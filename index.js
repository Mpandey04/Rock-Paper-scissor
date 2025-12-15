let computerMoves;
let userchoice;
let result;
const randomGenrate=()=>{
    computerMoves=Math.floor((Math.random()*3)+1)
}

const userInput=(num)=>{
    userchoice=num
    randomGenrate()
    Display()
    console.log(userchoice);
    console.log(computerMoves);
    if(userchoice===computerMoves){
        document.querySelector("#result").textContent="It's Draw!"
    }
    else if (
        (userchoice === 1 && computerMoves === 3) || // Rock beats Scissors
        (userchoice === 2 && computerMoves === 1) || // Paper beats Rock
        (userchoice === 3 && computerMoves === 2)    // Scissors beats Paper
    ) {
        result = "You Win 🎉";
        document.querySelector("#result").innerText = result;
    } 
    else {
        result = "Computer Wins 😢";
        document.querySelector("#result").innerText = result;
    }

}
const Display=()=>{
    if(computerMoves===1){
        document.querySelector(".choice").innerText=`Computer Choice is Rock`
    }
    else if(computerMoves===2){
        document.querySelector(".choice").innerText=`Computer Choice is Paper`
    }
    else{
        document.querySelector(".choice").innerText=`Computer Choice is Scissor`
    }
}