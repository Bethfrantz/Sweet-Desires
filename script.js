//Elisabeth Hoyt-Frantz, SDEV 153, Final Project, August 1, 2025

document.getElementById("contactForm").addEventListener("submit", function(e) 
                                                        
   e.preventDefault();

const name=document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

alert("Thank you for your message!");
   this.reset();
});

