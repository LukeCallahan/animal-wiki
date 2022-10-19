// Make all divs hidden by default
// when the user types in turtle, for example, remove the hidden attribute from class.
// include an else to handle incorrect form inputs. Show a message to user that they've made an error.

//Get the input from the form to show on console.log
window.onload = function() {
  const form = document.querySelector("form");

  form.onsubmit = function(event) {
    event.preventDefault();
    let input = document.querySelector("input#animal").value;

    let turtleInfo = document.getElementById("turtle");
    turtleInfo.setAttribute("class", "hidden");
    let snakeInfo = document.getElementById("snake");
    snakeInfo.setAttribute("class", "hidden");
    let insectsInfo = document.getElementById("insects");
    insectsInfo.setAttribute("class", "hidden");
    let anythingElseInfo = document.getElementById("anythingElse");
    anythingElseInfo.setAttribute("class", "hidden");
  
  // check the form input to see if it matches, turtle, snake, or insects, otherwise, tell them go find a dictionary

  if (input === "turtle") {
    turtleInfo.removeAttribute("class");
  } else if (input === "snake") {
    snakeInfo.removeAttribute("class");
  } else if (input === "insects") {
    insectsInfo.removeAttribute("class");
  } else {
    anythingElseInfo.removeAttribute("class");
  }
  };
};