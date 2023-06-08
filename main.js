let score = 0;
let click = 10;
let luck = 0;
let max_click = 60;
let box = document.getElementById('box');
let content = [1,2,3,4,5,6];
let audio = new Audio('images/dice.mp3');
// let luck_board = document.getElementById('per');
// let score_board = document.getElementById('score');

function roll(){
  audio.play();
  box.innerHTML = `<img class="dice" src="images/loader.gif">`;
setTimeout(()=>{
  click = click-1;
  let ind = Math.floor(Math.random()*6);
  if (click>=0) {
    box.innerHTML = `<img class="dice" src='images/${content[ind]}.png'>`;
    box.innerHTML +=`<h6 class='chance'>You have ${click} more chance</h6>`;
  score = score+content[ind];
  }else{
     alert('You are ' + luck + '% lucky');
    
  }
   luck =(score/60*100).toFixed(2);
  box.innerHTML += `<h6 class='score'>Score: ${score} </h6>`;
  box.innerHTML +=`<h6 class='score-luck'>Luck: ${luck}%</h6>`;
  console.log(ind);
},1500)
}
window.onload = function (){
  box.innerHTML += `<h6 class='score'>Score: ${score} </h6>`;
  box.innerHTML += `<h6 class='score-luck'>Luck: ${luck}%</h6>`;
  box.innerHTML += `<img class="dice" src='images/${content[3]}.png'>`;
    box.innerHTML +=`<h6 class='chance'>You have 10 chance</h6>`;
}



