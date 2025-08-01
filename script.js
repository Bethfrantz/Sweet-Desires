//Elisabeth Hoyt-Frantz, SDEV 153, Final Project, August 1, 2025
<script>
document.getElementById("contactForm").addEventListener("submit", function(e) 
                                                        [
   e.preventDefault();

const name=document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;

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

alert("Thank you for your message, ${name}!\n\nYour message: 
      "${message}"/n/nI will get back to you at ${email}!"}!);
   this.reset();
});
</script>
