"use strict";

//Soccer player
//○ Create page which has soccer field as bg image
//○ In top left corner there should be image of soccer player
//○ When user clicks anywhere on the field, the player is moved to that
//position
//○ Add the button which is used to disable player movement
//○ Images ( https://goo.gl/YDjwi4 )
var player = document.getElementById("playerIcon");
var body1 = document.querySelector("body");

function Moving(event) {
  var xPosition = event.clientX - body1.getBoundingClientRect().left - player.clientWidth / 2;
  var yPosition = event.clientY - body1.getBoundingClientRect().top - player.clientHeight / 2;
  player.style.left = xPosition + "px";
  player.style.top = yPosition + "px";
}

body1.addEventListener("click", Moving);
button.addEventListener("click", function () {
  return body1.removeEventListener("click", Moving);
});

function stopMoving(event) {
  body1.removeEventListener("click", Moving);
}

var button = document.getElementById("button3");
button.addEventListener("click", stopMoving);