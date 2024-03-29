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

  var email = document.querySelector("#email");
  var emailEntered = email.value;
  if (!emailEntered.includes("@")) {
    alert("Please enter a valid email address");
  } else {
    var firstName = document.querySelector("#fname");
    var firstNameEntered = firstName.value;
    var p1 = document.createElement("p");
    p1.innerText = "First name: " + firstNameEntered;

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

    var topics = document.querySelectorAll("input[type=checkbox]");
    var selectedTopics = [];
    for (y of topics) {
      if (y.checked) {
        selectedTopics.push(y.value);
      }
    }

    var p4 = document.createElement("p");
    p4.innerText = "Selected topic(s): " + selectedTopics;

    var heardAboutUs = document.querySelector("select");
    var selectedheardAboutUs =
      heardAboutUs.options[heardAboutUs.selectedIndex].value;
    var p5 = document.createElement("p");
    p5.innerText = "How you heard about us: " + selectedheardAboutUs;

    document.querySelector("footer").before(p1, p2, p3, p4, p5);

    var confirmation = document.querySelector(".meta-form");
    confirmation.innerHTML =
      "Thank you for submitting this form. Unfortunately, due to server issues, we are unable to recorded the following information:";
  }
});
