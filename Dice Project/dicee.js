// membuat random number player 1
let random1 = Math.floor(Math.random() * 6) + 1;
let picDicee = "dice" + random1 + ".png"; // template nama file
let diceImage = "images/" + picDicee; // file path
let image1 = document.querySelectorAll(".img")[0];
image1.setAttribute("src", diceImage);

// membuat random number player 2
let random2 = Math.floor(Math.random() * 6) + 1;
let picDicee2 = "dice" + random2 + ".png";
let diceImage2 = "images/" + picDicee2;
let image2 = document.querySelectorAll(".img")[1];
image2.setAttribute("src", diceImage2);

if (random1 > random2) {
  document.querySelector("h1").innerHTML = "🏁 Player 1 WIN 🏁";
} else if (random1 < random2) {
  document.querySelector("h1").innerHTML = "🏁 Player 2 WIN 🏁";
} else {
  document.querySelector("h1").innerHTML = " &#128170 DRAW &#128170";
}
