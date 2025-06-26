import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead ,snakeIntersection} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import { outsideGrid } from "./grid.js";
let lastRenderTime=0;
let gameOver=false;
const gameBoard=document.getElementById("game-board")


function main(currentTime) //current time is automatically given by the browser
{

    if(gameOver)
    {
        if(confirm("You lost , Press ok to RESTART")){
            window.location.reload()
        }
        return
    }
       
    window.requestAnimationFrame(main);
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000; //time in secs
    if(secondsSinceLastRender<1/SNAKE_SPEED)
        return
    console.log("Render");
    lastRenderTime=currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main) //function call to start the process of animation loop for every frame

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw()
{
    gameBoard.innerHTML='';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath()
{
    gameOver= outsideGrid(getSnakeHead()) || snakeIntersection()
}