let boxes = document.querySelectorAll(".box");
let resetB = document.querySelector("#reset");
let newGameB = document.querySelector("#newGame");
let msgBox = document.querySelector(".msgBox");
let msg = document.querySelector("#msg");
let turnO = true; //playerX,playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "#377771";
            turnO = false;
        } else{
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

        count++;
    })
})
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgBox.classList.add("hide");
    count=0;
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msgBox.classList.remove("hide");
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!= "" && pos2Val!= "" && pos3Val!= ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return;
            }
        }
    }
    console.log(count);
    if(count===8){
        msg.innerText = "DRAW";
        msgBox.classList.remove("hide");
    }

}
newGameB.addEventListener("click", resetGame);
resetB.addEventListener("click", resetGame);