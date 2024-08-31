/*
var element = document.querySelector("#myId"); // Mirip dengan getElementById
var elements = document.querySelectorAll(".myClass"); // Mirip dengan getElementsByClassName
*/

// pengaturan warna dengan DOM bukan praktik  terbaik dengan JavaScript karena bisa dilakukan dengan CSS
document.getElementById("title").style.color = "navy";
let item = document.querySelectorAll(".item");
item.forEach((items) => {
  items.style.color = "purple";
});

let judul = document.querySelectorAll(".judul");
judul.forEach((items) => {
  items.style.color = "navy";
});

let paragraph = document.querySelectorAll(".paragraph");
let text = (paragraph.item(0).style.color = "green");

document.querySelector("button").onclick = function () {
  document.querySelector("button").textContent = "Clicked!!";
};

// Manipulating HTML Atribut
// pada code dom.html google.com tapi pada saat di klik akan mengarah ke pipelr
document.querySelector("a").setAttribute("href", "https://pipelr.com/");
document.getElementById("myCanvas").addEventListener(MouseEvent);
