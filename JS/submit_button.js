"use strict"; // secures me from writing bad code

// gets called onclick in button then calls alert function
function testInputs() {
  const testData = document.getElementById("answer").value;
  alert(testData);
}
//
function testInputs2() {
  const testData2 = document.getElementById("answer").value;
  localStorage.setItem("data", testData2);
  location.replace("confirmation.html");
}

// function to display data with event as argument in the console
function genderInput(e) {
  localStorage.setItem("data2", e.target.value);
  console.log("click", e.target.value);
}

// Go back button // sadly broken 😭
function goBackButton(e) {
  location.replace("index.html");
}
