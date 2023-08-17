document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const subject = "New Contact Form Submission";
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        const mailtoLink = `lyongaming738@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open the default email client to compose the email
        window.location.href = mailtoLink;
    });
});
