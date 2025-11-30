// --- Countdown 5 → 0, then enable buttons ---
const countdown = document.getElementById('count');
const buttons = Array.from(document.querySelectorAll('.gamechoice'));
const userImg = document.getElementById('userImg');
const compImg = document.getElementById('compImg');
const resultImg = document.getElementById('resultImg');
const playAgain = document.getElementById("playAgainBtn");
const note2 = document.getElementById("note2");
const play1 = document.getElementById("play1");
const play2 = document.getElementById("play2");
const play3 = document.getElementById("play3");
const startBtn = document.getElementById("startBtn");
const summaryMessage = document.getElementById("message");
const maxplay=5;
let remaining;
let playCount = 0;
let gameOver = false;
let gameOverMess="";
let userchoice=[]; //https://www.w3schools.com/js/js_arrays.asp
let compchoice=[];
let resultrecord=[];

function showStartScreen(){
    playCount = 0;
    userchoice = [];
    compchoice = [];
    resultrecord = [];
    gameOver=false;
    gameOverMess="";

    play1.style.display="none";
    play2.style.display="none";
    play3.style.display="none";
    note2.style.display="none";
    countdown.style.display="none";
    playAgain.style.display="none";

    userImg.src="";
    compImg.src="";
    resultImg.src="";
    userImg.style.display="none";
    compImg.style.display="none";
    resultImg.style.display="none";

    buttons.forEach(btn=>btn.disabled=true);

    startBtn.style.display="inline-block";
}

function setText1(){
  play1.style.display="none";
  play2.style.display="none";
  play3.style.display="none";
  playAgain.style.display = "none";
  note2.style.display="none"
  countdown.style.display="block"
}

function setText2(){
  play1.style.display="block";
  play2.style.display="block";
  play3.style.display="block";
  playAgain.style.display = "inline-block";
  note2.style.display="none"
  countdown.style.display="none"
}

function startGame(){
    startBtn.style.display="none";
    playCount=0;
    startCountdown();
    summaryMessage.textContent="";
    summaryMessage.style.display="none"
}

function startCountdown(){
  setText1();
  countdown.style.display="block";
  const countdownWords = ["Shoot!", "Scissors", "Paper", "Rock", ".....", "Starting...", "Get Ready...."];
  remaining=6;
  countdown.textContent = countdownWords [remaining];
  playAgain.style.display = "none";
  userImg.src = "";
  compImg.src = "";
  resultImg.src = "";

  userImg.style.display = "none";
  compImg.style.display = "none";
  resultImg.style.display = "none";
  note2.style.display="none"

  buttons.forEach(btn => btn.disabled = true)

  const tick = setInterval(function() {//https://www.w3schools.com/jsref/met_win_setinterval.asp
    remaining--;
    countdown.textContent = countdownWords[remaining];
    if (remaining <= 0) {
      clearInterval(tick);//https://www.w3schools.com/jsref/met_win_clearinterval.asp
      countdown.textContent = "Shoot";
      note2.style.display="block"
      // Enable buttons
      buttons.forEach(btn => btn.disabled = false);
    }
  }, 1000);
}

function getResult (user, comp){
  if (user===comp) return"draw";
  if ((user ===1 && comp===3)|| (user===2 && comp===1)||(user===3 && comp===2))
    {return"win";}
  return"lose"
}

function showResult (result){
  if (result==="win"){
    resultImg.src="Winner.png"
  } else if (result==="lose"){
    resultImg.src="Loser.png"
  } else {
    resultImg.src="Draw.png"
  }
  resultImg.style.display="block"
}

function setImage(imgElement, num){
  if (num===1) imgElement.src="Rock.png";
  if (num===2) imgElement.src="Paper.png";
  if (num===3) imgElement.src="Scissors.png";
  imgElement.style.display="block"
}

function choiceword(num){
    if (num===1) return "Rock";
    if (num===2) return "Paper";
    if (num===3) return "Scissors";
}

function recordgame(user, comp, result){
    if (userchoice.length<maxplay){
        userchoice.push(user);//https://www.w3schools.com/jsref/jsref_push.asp
        compchoice.push(comp);
        resultrecord.push(result);
    }
}

function createSummarymessage(){
    let lines = [];
    lines[lines.length]="Game Summary:";
    lines.length++;

    for (let i=0; i<userchoice.length; i++){
        const game = i +1;
        const userword = choiceword(userchoice[i]);
        const compword = choiceword(compchoice[i]);
        const resultword = resultrecord[i].toUpperCase();//https://www.w3schools.com/jsref/jsref_touppercase.asp

        lines[lines.length]="Game "+(i+1)+": You - "+userword+"  |  Computer - "+compword+"  =>  "+resultword;
        lines.length++; 
    }

    return lines.join("\n");//https://www.w3schools.com/jsref/jsref_join.asp
}


function playnum(result){
    playCount++;
    gameOver=false;
    gameOverMess="";
    if (result==="win"){
        gameOver=true;
        gameOverMess="You won! The Games ends, click start if you wish to play again";
    } else if (playCount >=maxplay){
        gameOver=true;
        gameOverMess="You have played 5 times, click start if you wish to play again";
    } 
    setText2();
}

// --- for play result ---
document.getElementById('btn1').addEventListener('click', function() {
  buttons.forEach(function(btn){btn.disabled = true});
  const userNum = 1;
  const compNum = Math.floor(Math.random() * 3) + 1;
  setImage(userImg, userNum);
  setImage(compImg, compNum);
  const result = getResult(userNum, compNum);
  recordgame(userNum, compNum, result);
  showResult(result);
  setText2();
  playnum(result);
});

document.getElementById('btn2').addEventListener('click', function() {
  buttons.forEach(function(btn){btn.disabled = true});
  const userNum = 2;
  const compNum = Math.floor(Math.random() * 3) + 1;
  setImage(userImg, userNum);
  setImage(compImg, compNum);
  const result = getResult(userNum, compNum);
  recordgame(userNum, compNum, result);
  showResult(result);
  setText2();
  playnum(result);
});

document.getElementById('btn3').addEventListener('click', function() {
  buttons.forEach(function(btn){btn.disabled = true});
  const userNum = 3;
  const compNum = Math.floor(Math.random() * 3) + 1;
  setImage(userImg, userNum);
  setImage(compImg, compNum);
  const result = getResult(userNum, compNum);
  recordgame(userNum, compNum, result);
  showResult(result);
  setText2();
  playnum(result);
});



playAgain.addEventListener("click",() => {
    if (gameOver){
        alert(gameOverMess);
        const message=createSummarymessage();
        summaryMessage.textContent=message;
        summaryMessage.style.display="block";
        setTimeout(()=> {
            showStartScreen();
            gameOver=false;
            gameOverMess="";
        });
    } else{
        startCountdown();
    }
});

startCountdown();
