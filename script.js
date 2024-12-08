
// JavaScript to handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    
    // Get the values of the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // For demonstration purposes, display the form data in an alert
    if (name && email && message) {
        alert(`Thank you for your message, ${name}!\n\nWe will get back to you at ${email}.`);
        
        // Optionally, you can clear the form after submission
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
