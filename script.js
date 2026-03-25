let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const getcompchoice=() =>
{
    const options=["rock","paper","scissors"];
   const randidx= Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=() => {
console.log("game draw");
msg.innerText="game was draw try again";
msg.style.backgroundColor="#081b31";
} ;
const showwinner=(userwin) => 
{
if (userwin)
{
console.log("you win");
msg.innerText="you win!";
msg.style.backgroundColor="green";
userScore++;
userscorepara.innerText=userScore;
}
else{
    console.log("you loose");
msg.innerText="you loose ";
msg.style.backgroundColor='red'; 
compScore++;
compscorepara.innerText=compScore;   
}
};

const playgame=(userchoice)=>{
    console.log("user choice is",userchoice);
const compchoice=getcompchoice();
console.log("com choice is ",compchoice);
if(userchoice==compchoice)
{
    drawgame();
}
else{
    let userwin=true;
    if(userchoice=="rock")
    {
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice=="paper"){
userwin=compchoice==="scissors"?false:true;
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin);

}

};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});