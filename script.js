//Elisabeth Hoyt-Frantz, SDEV 153, Final Project, August 1, 2025
document.getElementById("emailForm").addEventListener("submit", function(event)
   event.preventDefault();

const name=document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const subject = document.getElementById("subject").value.trim();
const messge = documen.getElementById("message").value.trim();

if (name === "" || email === "" || subject === "" || message === ""){
  alert("All fields are required.");
  return;
}
if (!isValidEmail(email)){
  alert("Please enter a valid email address.");
  return;
}

console.log("Form Data:");
console.log ("Name:", name);
console.log(Email:A", email);
console.log("Subject:", subject);
console.log("Message:", message);

alert("Form submitted successfully! (Data logged to console)");
});

function isValidEmail(email) {
  const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
