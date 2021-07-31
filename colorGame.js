var numSquares=6;
var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay")
var messageDisplay=document.querySelector("#message")
var h1=document.querySelector("h1")
var newButton=document.querySelector("button")
var modeButtons=document.querySelectorAll(".mode")
messageDisplay.textContent="";
// var easyBtn=document.querySelector("#easyBtn")
// var hardBtn=document.querySelector("#hardBtn")

init();

function init(){
    setupButtons();
    setupSquares();
    reset();
}

function setupButtons(){
        for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected")
        modeButtons[1].classList.remove("selected")
        modeButtons[2].classList.remove("selected")
        this.classList.add("selected");
        if(this.textContent=="Easy"){
            numSquares=3;
        } else if(this.textContent=="Medium"){
            numSquares=5;
        } else{
            numSquares=6;
        }
        reset();
        });
    
    }
}
function setupSquares(){
            for(var i=0; i<squares.length; i++){
            squares[i].style.background=colors[i];  
            squares[i].addEventListener("click",function(){
            var clickedColor=this.style.background;
            if(clickedColor==pickedColor){
                colorChange();
                messageDisplay.textContent="Correct Ans!";
                newButton.textContent="play again?"
            }
            else{
                this.style.background="black";
                messageDisplay.textContent="Wronng Ans!";

        }
        });
    }
}

 function reset(){
     colors=generateRandomColors(numSquares);
     pickedColor=pickColor();
     colorDisplay.textContent=pickedColor;
     newButton.textContent="New Colors"
     messageDisplay.textContent="";
     for(var i=0; i<squares.length; i++){
         if(colors[i]){
             squares[i].style.background=colors[i]
             squares[i].style.display="block";

         } else {
             squares[i].style.display="none"
         }
     }
 }


// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares=3;
//     colors=generateRandomColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background=colors[i]
//         }
//         else{
//             squares[i].style.display="none";
//         }
//     }
// });
// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     colors=generateRandomColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0; i<squares.length; i++){
//         squares[i].style.background=colors[i];
//         squares[i].style.display="block"
//     }
// });


// newButton.addEventListener("click",function(){
//     colors=generateRandomColors(numSquares);

//     pickedColor=pickColor();
//     messageDisplay.textContent="";

//     for(var i=0; i<squares.length; i++){
//         squares[i].style.background=colors[i];
//     }
//     colorDisplay.textContent=pickedColor;
//     h1.style.background="steelblue";
//     newButton.textContent="New Colors"
// });
newButton.addEventListener("click",function(){
    reset();
});


function colorChange(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.background=pickedColor;
    }
    h1.style.background=pickedColor;
    // colorDisplay.style.background=pickedColor;
}
function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr=[]
    for(var i=0; i<num; i++){
       arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r=Math.floor(Math.random()*256)
    var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
    return "rgb("+ r + ", " + g + ", " + b +")";
}



