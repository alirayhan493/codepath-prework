//Global Constraints
const cluePauseTime = 333; // pause between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables

var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // 0.0 ~ 0.5
var guessCounter = 0;
var patternLen = 8;
var pattern = new Array(patternLen);
var clueHoldTime = 1000; // how long to hold each clu'es light and sound
var life = 3;
var timer= document.getElementById('timer');

function startGame(){
  life = 3;
  progress = 0;
  gamePlaying = true;
  createPattern();
  clueHoldTime = 1000;
  
  document.getElementById("startBtn").classList.add("hidden"); //you can add items to a class??
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden"); 
  document.getElementById("startBtn").classList.remove("hidden");
}

function playClueSequence(){
  let delay = nextClueWaitTime;
  guessCounter = 0;
  for (let i = 0; i<=progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - (clueHoldTime * .10);
  }
  
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime,btn)
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if (btn == pattern[guessCounter]){ // is the guess correct?
    if (guessCounter == progress ){ //is the turn over?
      if(progress == pattern.length - 1){ //last turn?
        winGame();
      } else {
        progress++;
        playClueSequence();
        
      }
    } else {
        guessCounter++;
    }
    
  } else {
    life--;
    
    if (life == 0){
      
      loseGame();
    }
    alert("You're guess was wrong. You have " + life + " lives remaining");
    
  }
}    

function createPattern(){
  for(let i = 0; i < patternLen; i++){ 
    let x = Math.floor(Math.random() * patternLen);
    if (x == 0){
      i--;
    }
    else{
      pattern[i] = x;
    }
    
  }
  
}

function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.")
}

function winGame(){
  stopGame();
  alert("Game Over. You won!.")
}



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 512.6,
  6: 629.6,
  7: 792,
  8: 866.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)