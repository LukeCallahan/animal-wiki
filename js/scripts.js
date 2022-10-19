// Make all divs hidden by default
// when the user types in turtle, for example, remove the hidden attribute from class.
// include an else to handle incorrect form inputs. Show a message to user that they've made an error.

//Get the input from the form to show on console.log



window.onload = function() {
  const form = document.querySelector("form");

  form.onsubmit = function(event) {
    event.preventDefault();
    let input = document.querySelector("input#animal").value;

    console.log(input);
  };
}