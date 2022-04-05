/* var fname = document.getElementById("First Name").value;
var email = document.getElementById("Email").value;
function submitted(event) {
  if (fname !== null) {
    event.preventDefault;
    console.log(event);
  }
} */

// console.log(document.URL);
// var url = new URL(document.URL);
// var params = new URLSearchParams(url.search);
// console.log(params);
// var firstName = params.get("first-name");
// console.log(firstName);

// var container = document.getElementById("info");

// container.appendChild(p);

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("success!");

  var firstName = document.querySelector("#fname");
  var p1 = document.createElement("p");
  p1.innerText = "First name: " + firstName.value;

  var email = document.querySelector("#email");
  var p2 = document.createElement("p");
  p2.innerText = "Email Address: " + email.value;

  var cadence = document.querySelectorAll("input[type=radio]");
  var selectedCadence = "";
  for (x of cadence) {
    if (x.checked) {
      selectedCadence = x.value;
    }
  }
  var p3 = document.createElement("p");
  p3.innerText = "Cadence: " + selectedCadence;

  document.querySelector("footer").before(p1, p2, p3);

  var confirmation = document.querySelector(".meta-form");
  confirmation.innerText =
    "Thank you for submitting this form. We have the following information on record:";
});
