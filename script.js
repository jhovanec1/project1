

const red = document.querySelector('#upleft');
const green = document.querySelector('#upright');
const yellow = document.querySelector('#downleft');
const blue = document.querySelector('#downright');

const startButton = document.querySelector('#start');
const playerButton = document.querySelector('#play1');
startButton.addEventListener('click', startTimer);
// playerButton.addEventListener('click',stopTimerStart);


var boardLights = [red, green, yellow, blue];
let count = 0;
let countTop = 0;
let level = 10; 
let levelArray = [];

// Starts the start up sequence upon clicking START button in window

function startTimer(){
    let startTime = setInterval(function(){
        if(countTop === 30 || countTop === 31){
            clearInterval(startTime);
            red.style.opacity = ".2";
            yellow.style.opacity = ".2";
            blue.style.opacity = ".2";
            green.style.opacity = ".2";
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
            console.log(countTop);   
    },100);
}

//Creates array which will be converted to colors and then ran through visual function. 
// Length of array is determined by the level. Additionally level will control timing.

function randomizer(){
    for(i=0;i<level;i++){
        levelArray.push(Math.floor(Math.random()*4)+1);
        
    }
}
randomizer();


function gamePlay(levelArray) {
        
        levelArray.forEach(function(j, index){setTimeout(function(){
            if(j===1){
                red.style.opacity = "1.0";
                yellow.style.opacity = ".2";
                green.style.opacity = ".2";
                blue.style.opacity = ".2";
                console.log('red')
                i ++;
            }else if(j===2){
                red.style.opacity = ".2";
                yellow.style.opacity = ".2";
                green.style.opacity = "1.0";
                blue.style.opacity = ".2";
                console.log('green');
                i ++;
            }else if(j===3){
                red.style.opacity = ".2";
                yellow.style.opacity = ".2";
                green.style.opacity = ".2";
                blue.style.opacity = "1.0";
                console.log('blue');
                i ++;
            }else if(j===4){
                red.style.opacity = ".2";
                yellow.style.opacity = "1.0";
                green.style.opacity = ".2";
                blue.style.opacity = ".2";
                console.log('yellow');
                i ++;
            }
        
        }, 500* index);
    });
    }

gamePlay(levelArray);

// var intervalId = setInterval(function(){
//     var timoutId = setTimeout(function(){ 
//         console.log("wait for me!");
//     }, 1000);
//  }, 1000);