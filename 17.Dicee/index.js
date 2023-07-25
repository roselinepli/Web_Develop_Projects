var randomNumber1 = Math.floor(Math.random() * 6) + 1;
/* <img class="img1" src="./images/dice6.png"></img> */
var randomSource1 = "./images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomSource2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👍Player1 wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 wins!👍"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}