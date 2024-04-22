let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [1,4,7],
    [3,4,5],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];



const resetGame =() =>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
    count =0;
};

boxes.forEach((box) =>
{
    
    box.addEventListener("click", ()=> {
        count ++;
        console.log(count);
       if(turnO){
           box.innerText= "O";
            turnO =false;
       }
       else{
        box.innerText='X';
        turnO =true;
       }
       box.disabled = true;
       if(count == '9'){
        drawGame();
    }
       checkwinner();
     
    });
   
});



const disableBox=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
 
}

const drawGame =()=>{
    msg.innerText =`The Game is DRAW!!!`;
    msgContainer.classList.remove("hide");
    count =0;
}

const showWinner=(winner) =>{
        msg.innerText =`Congratulations! winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBox();
        count =0;
}

const checkwinner =() =>{

    for(let pattern of winPatterns){
        let ptn1 = boxes[pattern[0]].innerText;
        let ptn2 = boxes[pattern[1]].innerText;
        let ptn3 = boxes[pattern[2]].innerText;      
        if(ptn1!="" && ptn2 !="" && ptn3!=""){
            if(ptn1===ptn2 && ptn2===ptn3){
              console.log("winner", ptn1)
              showWinner(ptn1);
            }
    
        }
    };
}

newGame.addEventListener("click",(resetGame));
resetbtn.addEventListener("click",(resetGame));