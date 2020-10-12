

const red = document.querySelector('#upleft');
const green = document.querySelector('#upright');
const yellow = document.querySelector('#downleft');
const blue = document.querySelector('#downright');

const startButton = document.querySelector('#start');
const playerButton = document.querySelector('#play1');
startButton.addEventListener('click', startTimer);
playerButton.addEventListener('click',stopTimerStart);


var boardLights = [red, green, yellow, blue];
let count = 0;
let countTop = 0;
let level = 10; 
let levelArray = [];

// Start Game color sequence, also practice with how to animate

function startGame(){
    // while(countTop<300){
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
    
    console.log(count);
    countTop ++;
    console.log(countTop);
    // }
    
}

// Starts the start up sequence upon clicking START button in window

function startTimer(){
    let startTime = setInterval(startGame,100);
}

// Attempt to stop the startup sequence

function stopTimerStart(){
    // if(countTop >= 40){
    //     clearInterval(startTime);
    //     startButton.removeEventListener('click', startTimer)
    //     countTop = 0;
    // }else{
    //     console.log("doing nothing");
    // }
}

//Creates array which will be converted to colors and then ran through visual function. 
// Length of array is determined by the level. Additionally level will control timing.

function randomizer(){
    for(i=0;i<level;i++){
        levelArray.push(Math.floor(Math.random()*4)+1);
        
    }
}
randomizer();
// console.log(levelArray);



function gamePlay(levelArray) {
    for(let i =0;i<levelArray.length;i++){
        let j = levelArray[i];
        setTimeout(gameLogic(j), 100);
        function gameLogic(j) {
            if(j===1){
                red.style.opacity = "1.0";
                yellow.style.opacity = ".2";
                green.style.opacity = ".2";
                blue.style.opacity = ".2";
                console.log('red')
            }else if(j===2){
                red.style.opacity = ".2";
                yellow.style.opacity = ".2";
                green.style.opacity = "1.0";
                blue.style.opacity = ".2";
                console.log('green');
            }else if(j===3){
                red.style.opacity = ".2";
                yellow.style.opacity = ".2";
                green.style.opacity = ".2";
                blue.style.opacity = "1.0";
                console.log('blue');
            }else if(j===4){
                red.style.opacity = ".2";
                yellow.style.opacity = "1.0";
                green.style.opacity = ".2";
                blue.style.opacity = ".2";
                console.log('yellow');
            }
        }
        console.log(j);
    }
}
gamePlay(levelArray);