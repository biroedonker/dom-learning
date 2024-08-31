document.querySelector(".btn").addEventListener("click", function () {
  let sound = new Audio("sounds/crash.mp3");
  sound.play();
});

let drumButton = document.querySelectorAll(".drum").length;

for (i = 0; i < drumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color = "white";
    let buttonDrum = this.innerHTML;
    console.log(buttonDrum);
    makeSound(buttonDrum);
    buttonAnimation(buttonDrum);
  });
}

// akan bekerja di semua elemen web, dan mengembalikan event keyboard
// function(event) disebut callback function
document.addEventListener("keypress", function (event) {
  console.log(event);
  // memakai parameter event, dengan key properti dari event keyboard
  makeSound(event.key);

  // memanggil fungsi buttonAnimation, dengan parameter
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonDrum);
      break;
  }
}

function buttonAnimation(currentKey) {
  // kostruktor untuk mengakses class yang sudah ada
  var activeButton = document.querySelector("." + currentKey);

  // memasukan class baru di class yang sudah ada
  activeButton.classList.add("pressed");

  // setTimeout methode bawaan JavaScript
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
