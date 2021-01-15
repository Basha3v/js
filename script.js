let aged = confirm("Вы старше 18 лет?");

function accessAllowed() {
  alert("Access Allowed");
  console.log("User got access");
}
function accessDenied() {
  alert("Access Denied");
  console.log("User didn't get access");
}


if (aged == true) {
  accessAllowed();
} else {
  accessDenied();
}

/* var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var popup = document.querySelector(".close");


console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem(){
  var newLi = document.createElement("li");
  newLi.innerHTML = "New task!";
  newLi.className = "item";
  myList.appendChild(newLi);
  popup.style.display = "none";
}
function delItem(){
  myList.removeChild(story[0]);

  if (story.length == 0) {
    popup.style.display = "block";
  }
}

function closePopup() {
  popup.style.display = "block";
}
btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup) */