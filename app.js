let gameSeq=[];
let userSeq=[];
let color=["red","orange","blue","purple"];

let start=false;
let level=0;
let h=document.querySelector("h3");
let high=0;

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game started");
    }
    start=true;
    levelUp();
})



function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelUp() {
    userSeq=[];
    level++;
    h.innerText=`Level ${level}`;
    let ranIndex=Math.floor(Math.random()*3);
    let ranColor=color[ranIndex];
    let btn=document.querySelector(`.${ranColor}`);
    gameflash(btn);
    gameSeq.push(ranColor);
}
function check(ind){
    if(userSeq[ind]===gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h.innerHTML=`GAME OVER <br><b>Your Score :${level}</b><br>Restart Now By Pressing Any Key .`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000)
        if(level>=high){
            h.append(`Highest Score: ${level}`);
        }
        else{
            h.append(` Highest Score: ${high}`)
        }
        Reset();
    }
}

function btnpress(){
    userflash(this);
    let col=this.getAttribute("id");
    userSeq.push(col);
    check(userSeq.length-1);
}
let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnpress);
}

function Reset(){
  level=0;
  start=false;
  gameSeq=[];
  userSeq=[];   
}