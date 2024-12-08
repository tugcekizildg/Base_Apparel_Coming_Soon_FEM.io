document.addEventListener("DOMContentLoaded", () => {
    const formEl = document.getElementById("form");
    const errorIcon = document.getElementById("error-icon");
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");
    const emailInput = document.getElementById("email");


    /* 
        function to validate email
    */
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(String(email).toLowerCase());
    }
    
    formEl.addEventListener("submit", function (e) {
        e.preventDefault();
    
        const emailValue = emailInput.value.trim();  // Get the trimmed email value
    
        // Reset the error and success messages initially
        errorIcon.style.display = "none";
        errorMessage.style.display = "none";
        successMessage.style.display = "none";
    
        // Check if email value is empty
        if (emailValue === "") {
            errorIcon.style.display = "block";
            errorMessage.style.display = "block";
        }
        // Check if email format is invalid
        else if (!validateEmail(emailValue)) {
            errorIcon.style.display = "block";
            errorMessage.style.display = "block";
        }
        // If email is valid
        else {
            successMessage.style.display = "block";
            formEl.reset(); // Reset the form
        }
    });
});

const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
};

// Initial call
setVh();

// Update on resize
window.addEventListener('resize', setVh);
