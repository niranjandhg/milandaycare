document.addEventListener("DOMContentLoaded", function () {
    // Get the contact form
    const contactForm = document.querySelector("form");
  
    // Add event listener for form submission
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission
  
      // Get form data
      const name = contactForm.querySelector("[name='name']").value;
      const email = contactForm.querySelector("[name='email']").value;
      const message = contactForm.querySelector("[name='message']").value;
  
      // Simple client-side validation
      if (!name || !email || !message) {
        alert("All fields are required!");
        return;
      }
  
      // Use fetch to send the form data to the server (POST)
      fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`,
      })
        .then((response) => response.text())
        .then((data) => {
          // Show confirmation message or handle response
          alert("Thank you for reaching out! We will get back to you soon.");
          contactForm.reset(); // Reset the form fields
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong. Please try again later.");
        });
    });
  });
  