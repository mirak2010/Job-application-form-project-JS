document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the button and spinner
    const button = document.getElementById("submitButton");
    button.classList.add("loading"); // Show spinner

    // Simulate a form submission process (e.g., sending data)
    setTimeout(function() {
        // After submission, redirect to the Thank You page
        window.location.href = 'typage.html'; // Redirect to thank you page
    }, 2000); // Adjust the timeout to match your submission delay
});