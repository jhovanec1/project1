

const red = document.querySelector('#upleft');
const green = document.querySelector('#upright');
const yellow = document.querySelector('#downleft');
const blue = document.querySelector('#downright');
const gameButton = document.querySelector('#circle');
const startButton = document.querySelector('#start');
const playerButton = document.querySelector('#play1');
const levelDiv = document.querySelector('#level');
const levelDisplay = document.querySelector('p2');
// console.log(levelDisplay);


window.addEventListener('load', startTimer);

// startButton.addEventListener('click', gamePlay)



var boardLights = [red, green, yellow, blue];
let count = 0;
let countTop = 0;
let levelNum = 1;
let level = 5* levelNum; 
let levelArray = [];

// Starts the start up sequence upon clicking START button in window
function resetColors(){
    setTimeout( function() {
    red.style.opacity = ".2";
    yellow.style.opacity = ".2";
    blue.style.opacity = ".2";
    green.style.opacity = ".2";
    }, 200);
}

function startTimer(){
    let startTime = setInterval(function(){
        if(countTop === 30 || countTop === 31){
            red.style.opacity = ".2";
            yellow.style.opacity = ".2";
            blue.style.opacity = ".2";
            green.style.opacity = ".2";
            resetColors();
            clearInterval(startTime);
        }
            if(count<1){
                red.style.opacity = "1.0";
                yellow.style.opacity = ".2";
                count ++;
            }else if(count>=1 && count<2) {
                green.style.opacity = "1.0";
                red.style.opacity = ".2";
                count ++;
            }else if(count>=2 && count<3) {
                blue.style.opacity = "1.0";
                green.style.opacity = ".2";
                count ++;
            }else if(count>=3 && count<4) {
                blue.style.opacity = ".2";
                yellow.style.opacity = "1.0";
                count = 0;
            } 
            countTop ++;
            // console.log(countTop);
            // console.log(count);   
    },100);
}

//Creates array which will be converted to colors and then ran through visual function. 
// Length of array is determined by the level. Additionally level will control timing.

function randomizer(){
    level = 5* levelNum;
    for(i=0;i<level;i++){
        levelArray.push(Math.floor(Math.random()*4)+1);
    }
    gamePlay(levelArray);
}

function gamePlay(levelArray) {
        levelDisplay.innerHTML = levelNum;
        levelArray.forEach(function(j, index){setTimeout(function(){
            if(j===1){
                red.style.opacity = "1.0";
                yellow.style.opacity = ".2";
                green.style.opacity = ".2";
                blue.style.opacity = ".2";
                console.log('red')
                resetColors();
                i ++;
            }else if(j===2){
                red.style.opacity = ".2";
                yellow.style.opacity = ".2";
                green.style.opacity = "1.0";
                blue.style.opacity = ".2";
                console.log('green');
                resetColors();
                i ++;
            }else if(j===3){
                red.style.opacity = ".2";
                yellow.style.opacity = ".2";
                green.style.opacity = ".2";
                blue.style.opacity = "1.0";
                console.log('blue');
                resetColors();
                i ++;
            }else if(j===4){
                red.style.opacity = ".2";
                yellow.style.opacity = "1.0";
                green.style.opacity = ".2";
                blue.style.opacity = ".2";
                console.log('yellow');
                resetColors();
                i ++;
            }
        
        }, 800* index);
    });
    }

startButton.addEventListener('click', randomizer);
console.log(levelArray);
answerArray = [];



red.addEventListener('click', ()=>{answerArray.push(1); console.log(answerArray)});
blue.addEventListener('click', ()=>{answerArray.push(3); console.log(answerArray)});
yellow.addEventListener('click', ()=>{answerArray.push(4); console.log(answerArray)});
green.addEventListener('click', ()=>{answerArray.push(2); console.log(answerArray)});


function nextLevel(){
    levelArray = [];
    answerArray = [];
    levelNum ++;
    score = 0;
    console.log('next level initiated')
}
function loser(){
    levelNum = 1;
    score = 0;
    answerArray = [];
    levelArray = [];
}


let score = 0;
function checkInput(){
    if(score === levelArray.length){
        nextLevel();
        alert('You won this round.')
    }else{(score<levelArray.length)
        for(let i = score;i<answerArray.length; i++){
            if(answerArray[i] === levelArray[i]){
                score ++;
                console.log(score);
            }else{
                console.log('no');
                alert('You blew it');
                loser();
            }}
    }

}
circle.addEventListener('click', checkInput)