var randomNumber1 = Math.floor(Math.random() * 6 )+1;
var randomLeftImages = "dice" + randomNumber1 + ".png";
var leftImage = document.querySelector('.img1').setAttribute("src", "images/"+randomLeftImages);

var randomNumber2 = Math.floor(Math.random() * 6 )+1;
var randomRightImages = "dice" + randomNumber2 + ".png";
var rightImage = document.querySelector('.img2').setAttribute("src", "images/"+randomRightImages);
var heading = document.querySelector("h1")
if(randomNumber1>randomNumber2){
    heading.innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    heading.innerHTML="🚩Player 2 Wins!";
}
else{
    heading.innerHTML="🚩Draw!";
}