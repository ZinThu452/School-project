document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Perform form validation or other actions here

        alert(`Thank you for contacting us, ${name}! We'll get back to you shortly.`);
        form.reset(); // Reset form after submission
    });
});
