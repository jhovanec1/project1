
// Defines all of the elements that will be adjusted in the game

const red = document.querySelector('#upleft');
const green = document.querySelector('#upright');
const yellow = document.querySelector('#downleft');
const blue = document.querySelector('#downright');
const gameButton = document.querySelector('#circle');
const startButton = document.querySelector('#start');
const playerButton = document.querySelector('#play1');
const levelDiv = document.querySelector('#level');
const levelDisplay = document.querySelector('p2');
const pointDisplay = document.querySelector('p3');

// console.log(pointDisplay);


window.addEventListener('load', startTimer);
window.addEventListener('load', flashStart);




var boardLights = [red, green, yellow, blue];
let count = 0;
let countTop = 0;
let levelNum = 1;
let level = 5* levelNum; 
let levelArray = [];
let timeChange = 1;
let points = 0;
let isGameStarted = false;


function resetColors(){
    setTimeout( function() {
    red.style.opacity = ".3";
    yellow.style.opacity = ".3";
    blue.style.opacity = ".3";
    green.style.opacity = ".3";
    }, 200);
}

// Starts the start up sequence upon clicking START button in window
function startTimer(){
    let startTime = setInterval(function(){
        if(countTop === 30 || countTop === 31){
            red.style.opacity = ".3";
            yellow.style.opacity = ".3";
            blue.style.opacity = ".3";
            green.style.opacity = ".3";
            resetColors();
            clearInterval(startTime);
        }
            if(count<1){
                red.style.opacity = "1.0";
                yellow.style.opacity = ".3";
                count ++;
            }else if(count>=1 && count<2) {
                green.style.opacity = "1.0";
                red.style.opacity = ".3";
                count ++;
            }else if(count>=2 && count<3) {
                blue.style.opacity = "1.0";
                green.style.opacity = ".3";
                count ++;
            }else if(count>=3 && count<4) {
                blue.style.opacity = ".3";
                yellow.style.opacity = "1.0";
                count = 0;
            } 
            countTop ++;
            // console.log(countTop);
            // console.log(count);   
    },100);
}
// Function for activating/controlling START button background color flash

function flashStart(){
    let flasher = 0;
        setInterval(function(){
            if(isGameStarted===false){
            if(flasher%2 ===0){
                startButton.style.background = 'red';
                flasher ++;
                // console.log(flasher);
            }else{
                startButton.style.background = 'grey';
                flasher ++;
                // console.log(flasher);
            }
        }
    }, 800)
}

//Creates array which will be converted to colors and then ran through visual function. 
// Length of array is determined by the level. Additionally level will control timing.

function randomizer(){
    answerArray = [];
    isGameStarted = true;
    level = 5+ levelNum;
    for(i=0;i<level;i++){
        levelArray.push(Math.floor(Math.random()*4)+1);
    }
    gamePlay(levelArray);
}
// Main function for controlling game display. Runs the sequence created in randomizer()

function gamePlay(levelArray) {
        levelDisplay.innerHTML = levelNum;
        pointDisplay.innerHTML = points;
        circle.addEventListener('click', checkInput, true);
        // console.log(timeChange);
        startButton.removeEventListener('click',randomizer, true)
        levelArray.forEach(function(j, index){setTimeout(function(){
            if(j===1){
                red.style.opacity = "1.0";
                yellow.style.opacity = ".3";
                green.style.opacity = ".3";
                blue.style.opacity = ".3";
                console.log('red')
                resetColors();
                i ++;
            }else if(j===2){
                red.style.opacity = ".3";
                yellow.style.opacity = ".3";
                green.style.opacity = "1.0";
                blue.style.opacity = ".3";
                console.log('green');
                resetColors();
                i ++;
            }else if(j===3){
                red.style.opacity = ".3";
                yellow.style.opacity = ".3";
                green.style.opacity = ".3";
                blue.style.opacity = "1.0";
                console.log('blue');
                resetColors();
                i ++;
            }else if(j===4){
                red.style.opacity = ".3";
                yellow.style.opacity = "1.0";
                green.style.opacity = ".3";
                blue.style.opacity = ".3";
                console.log('yellow');
                resetColors();
                i ++;
            }
        
        }, 1200* index* timeChange);
    });
    }

// Initiates game and functions off click of the START button
startButton.addEventListener('click', randomizer, true);
console.log(levelArray);
answerArray = [];


// Pushes player inputs into answerArray which is then compared to gameArray
red.addEventListener('click', ()=>{answerArray.push(1); checkInput(); console.log(answerArray)});
blue.addEventListener('click', ()=>{answerArray.push(3); checkInput(); console.log(answerArray)});
yellow.addEventListener('click', ()=>{answerArray.push(4); checkInput();console.log(answerArray)});
green.addEventListener('click', ()=>{answerArray.push(2); checkInput();console.log(answerArray)});

// Function used when level is won, initiates next level
function nextLevel(){
    levelArray = [];
    answerArray = [];
    levelNum ++;
    score = 0;
    // console.log('next level initiated')
    timeChange = timeChange * .9;
    isGameStarted = false;
    startButton.addEventListener('click', randomizer,true);
}
// Function used when level is lost, resets points and levels. Initiates reset game

function loser(){
    levelNum = 1;
    score = 0;
    answerArray = [];
    levelArray = [];
    points = 10;
    isGameStarted = false;
    startButton.addEventListener('click', randomizer,true);
}

// Function to compare user input vs random level array. 

let score = 0;
function checkInput(){
    if(score === levelArray.length&&levelArray.length!==0){
        points = points + (10*score);
        nextLevel();
        // console.log(points);
        alert('You won this round. Press start to continue.')
    }else if(score<levelArray.length&&levelArray.length!==0){
        for(let i = score;i<answerArray.length; i++){
            if(answerArray[i] === levelArray[i]){
                score ++;
                // console.log(score);
            }else{
                alert('You blew it. Press start to start over.');
                loser();
                console.log(levelArray.length);
            }
        }}
}
circle.addEventListener('click', checkInput);