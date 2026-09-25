const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "2347016222618";

    const whatsappMessage =
        `Hello SmartHome Pro!%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Email: ${email}%0A` +
        `Service: ${service}%0A` +
        `Message: ${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();
});