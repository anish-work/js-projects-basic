/*
GAME FUNCTION 
-Player must guess a number between minimum and maximum
-Player gets certain amount of guesses
-Notify player of remaining guesses
-Notify player of the correct answer if loose
-Let player get the chance to play again
*/


//Gamevalues
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

   //UI Elements
   const game = document.querySelector('#game') ,
         minNum = document.querySelector('.min-num'),
         maxNum = document.querySelector('.max-num'),
         guessBtn = document.querySelector('#guess-btn'),
         guessInput = document.querySelector('#guess-input'),
         message = document.querySelector('.message')

 //Assign UI min and max
 minNum.textContent = min;
 maxNum.textContent = max;
 
//Listen for guess
guessBtn.addEventListener('click', function(e){
   const guess = parseInt((guessInput.value))

   if(isNaN(guess) || guess < min || guess > max){
    showMessage('Please enter a number between the range', 'red');
     }

    //Validate Input
    else if(guess === winningNum){
        //YOU WON!
        gameOver(true,`That's it!, You won. The correct number was ${winningNum} `)
        

    }else{
        //Decrease the number of chances
        guessesLeft -= 1;

        if(guessesLeft === 0 ){
        //LOSE!
        
        gameOver(false, `Oops!, You Loose. The correct number was ${winningNum} `)
        
        // showMessage(`Oops!, You Loose. The correct number was ${winningNum} `,'red')
        // guessInput.disabled = true;

        // guessInput.style.borderColor = 'red';

        // guessBtn.value = 'Play Again';
        // guessBtn.addEventListener('click', function(){
        //     location.reload();
        // })
        //Show Lost message
       
        
        }else {
        //Wrong answer
        guessInput.style.borderColor = 'red';

        guessInput.value = '';
        
        //Incorrect message
        showMessage(`Oops! ${guess} is incorrect, you have only ${guessesLeft} chances left`,'red' )
        }
        }

       
          
        
  e.preventDefault();
})


//Game over function
function gameOver(won, msg){
   
    let color;
    won == true ? color = 'green' : color = 'red';
    //Show message
    showMessage(msg,color);

    //Disable input
    guessInput.disabled = true;

    //Border to green
    guessInput.style.borderColor = color;

    //Change the button to play Again 
    guessBtn.value = 'Play Again';

    guessBtn.addEventListener('click', function(){
        location.reload();
    })
}



//Set message
function showMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}


//generate random number
function getRandomNum(min, max){

    return Math.floor(Math.random()*(max-min+1)+min);

}