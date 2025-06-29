
import { getInputDirection } from "./input.js";
export const SNAKE_SPEED = 5;
let newSegments=0;

  const snakeBody=[{x:11 , y:11}]
  export function update()
  {

    addSegments();
    const inputDirection=getInputDirection();
    // console.log('this is updaqte snake')

    for(let i=snakeBody.length-2;i>=0;i--)
      snakeBody[i+1]={...snakeBody[i]}; 
    //we are using the spread operator as shown above
    /*  {...snakeBody[i]} will not make changes to our current real body of snake*/

    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;

  }

  export function draw(gameBoard)
  {
    // console.log("this is ddraw snake")
    snakeBody.forEach(segment=>{
      const snakeElement=document.createElement("div")
      snakeElement.style.gridRowStart=segment.y;
      snakeElement.style.gridColumnStart=segment.x;
      snakeElement.classList.add("snake")
      gameBoard.appendChild(snakeElement)
    })
  }

  export function expandSnake(amount)
  {
    newSegments+=amount;
  }

  export function onSnake(position, {ignoreHead=false}={})
  {
    return snakeBody.some((segment,index)=>{

      if(ignoreHead && index===0) return false
      return equalPositions(segment,position);
    })
  }


  function equalPositions(pos1,pos2)
  {
    return pos1.x===pos2.x && pos1.y === pos2.y;
  }


  export function getSnakeHead()
  {
    return snakeBody[0];
  }



  export function snakeIntersection()
  {
    return onSnake(snakeBody[0], {ignoreHead:true})
  }
  function addSegments()
  {

    for(let i=0;i<newSegments;i++)
    {
      snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSegments=0;

  }