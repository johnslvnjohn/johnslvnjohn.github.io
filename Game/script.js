// --- Countdown 5 → 0, then enable buttons ---
const countdown = document.getElementById('count');
const buttons = Array.from(document.querySelectorAll('.gamechoice'));
const userImg = document.getElementById('userImg')
const compImg = document.getElementById('compImg')
const resultImg = document.getElementById('resultImg')
const playAgain = document.getElementById("playAgainBtn");
const timertext = document.getElementById("timertext")
let remaining;

function startCountdown(){
  remaining=3;
  countdown.textContent = remaining;
  playAgain.style.display = "none";
  timertext.style.display="block"
  userImg.src = "";
  compImg.src = "";
  resultImg.src = "";

  userImg.style.display = "none";
  compImg.style.display = "none";
  resultImg.style.display = "none";

  buttons.forEach(btn => btn.disabled = true)

  const tick = setInterval(function() {
    remaining--;
    countdown.textContent = remaining;
    if (remaining <= 0) {
      clearInterval(tick);
      countdown.textContent = "Now we shoot";
      timertext.style.display="none"
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
  playAgain.style.display = "inline-block";
});

document.getElementById('btn2').addEventListener('click', function() {
  buttons.forEach(function(btn){btn.disabled = true});
  const userNum = 2;
  const compNum = Math.floor(Math.random() * 3) + 1;
  setImage(userImg, userNum);
  setImage(compImg, compNum);
  const result = getResult(userNum, compNum);
  showResult(result);
  playAgain.style.display = "inline-block";
});

document.getElementById('btn3').addEventListener('click', function() {
  buttons.forEach(function(btn){btn.disabled = true});
  const userNum = 3;
  const compNum = Math.floor(Math.random() * 3) + 1;
  setImage(userImg, userNum);
  setImage(compImg, compNum);
  const result = getResult(userNum, compNum);
  showResult(result);
  playAgain.style.display = "inline-block";
});

playAgain.addEventListener("click",startCountdown);

startCountdown();
