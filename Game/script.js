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
let remaining;

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

  const tick = setInterval(function() {
    remaining--;
    countdown.textContent = countdownWords[remaining];
    if (remaining <= 0) {
      clearInterval(tick);
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


// --- for play result ---
document.getElementById('btn1').addEventListener('click', function() {
  buttons.forEach(function(btn){btn.disabled = true});
  const userNum = 1;
  const compNum = Math.floor(Math.random() * 3) + 1;
  setImage(userImg, userNum);
  setImage(compImg, compNum);
  const result = getResult(userNum, compNum);
  showResult(result);
  setText2();
});

document.getElementById('btn2').addEventListener('click', function() {
  buttons.forEach(function(btn){btn.disabled = true});
  const userNum = 2;
  const compNum = Math.floor(Math.random() * 3) + 1;
  setImage(userImg, userNum);
  setImage(compImg, compNum);
  const result = getResult(userNum, compNum);
  showResult(result);
  setText2();
});

document.getElementById('btn3').addEventListener('click', function() {
  buttons.forEach(function(btn){btn.disabled = true});
  const userNum = 3;
  const compNum = Math.floor(Math.random() * 3) + 1;
  setImage(userImg, userNum);
  setImage(compImg, compNum);
  const result = getResult(userNum, compNum);
  showResult(result);
  setText2();
});

playAgain.addEventListener("click",startCountdown);

startCountdown();
