/**
 * Given the 'id' attribute of a form element,
 * this will return the value entered by the user
 * into that form element.
 * @param {string} id - The id of the form element
 * @returns {string} The value from the form element
 */
function formValue(id) {
  // Get the input from the form on HTML page.
  let formElement = document.getElementById(id);

  // If the element is referenced but isn't there it will return "NOT FOUND".
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // If no data is entered, then the system will display placeholder.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return value;
}

/**
 * Given the 'id' of an HTML element and a
 * 'className', this will add that class to
 * the HTML element.
 * @param {string} id - The id of the element
 * @param {string} className - The class name to add
 */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/**
 * The code here will be executed each time
 * that the Generate button is clicked.
 */
function generate() {
  // Retrieve form values
  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous_person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet_name");

  // Insert form values into madlab
  let madLab = `
 Dear ${relative},
  <br><br>
  I have been having a really ${adjective1} time
  at camp. The counselour is ${adjective2} and
  the food is ${adjective3}. I met ${famousPerson}
  and we quickly became ${noun}. Talk soon!
  <br><br>
  Your ${dessert},
  <br>
  ${petName}
`;

  // Output the madlab to the player.
  document.getElementById("output").innerHTML = madLab;
  document.getElementById("form").style.display = "none";
  document.getElementById("playAgainBtn").style.display = "block";
}

/**
 * Resets the form and allows the user to play again.
 */
function playAgain() {
  // Clear all input fields
  document.getElementById("relative").value = "";
  document.getElementById("adjective-1").value = "";
  document.getElementById("adjective-2").value = "";
  document.getElementById("adjective-3").value = "";
  document.getElementById("famous_person").value = "";
  document.getElementById("noun").value = "";
  document.getElementById("dessert").value = "";
  document.getElementById("pet_name").value = "";

  // Clear the output
  document.getElementById("output").innerHTML = "";

  // Show the form and hide the Play Again button
  document.getElementById("form").style.display = "block";
  document.getElementById("playAgainBtn").style.display = "none";
}