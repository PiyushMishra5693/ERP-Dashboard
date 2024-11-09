function showLoginForm(role) {
    const loginFormContainer = document.getElementById("login-form-container");
    const loginTitle = document.getElementById("login-title");

    switch (role) {
        case 'admin':
            loginTitle.textContent = "Admin Login";
            break;
        case 'sales-manager':
            loginTitle.textContent = "Sales Manager Login";
            break;
        case 'labour':
            loginTitle.textContent = "Labour Login";
            break;
        case 'hr-department':
            loginTitle.textContent = "HR Department Login";
            break;
        default:
            loginTitle.textContent = "Login";
    }

    loginFormContainer.style.display = "block";
    document.querySelector(".role-icons").style.display = "none";
}

function hideLoginForm() {
    const loginFormContainer = document.getElementById("login-form-container");
    loginFormContainer.style.display = "none";
    document.querySelector(".role-icons").style.display = "flex";
}

function showSignUpForm() {
    document.getElementById("sign-up-form-container").style.display = "block";
    document.getElementById("login-form-container").style.display = "none";
}

function hideSignUpForm() {
    document.getElementById("sign-up-form-container").style.display = "none";
    document.getElementById("login-form-container").style.display = "block";
}

function submitSignUp() {
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const dob = document.getElementById("signup-dob").value;
    const errorMessage = document.getElementById("signup-error-message");


    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
        errorMessage.textContent = "Please enter a valid Gmail address (e.g., example@gmail.com).";
        errorMessage.style.display = "block";
        return;
    }

    
    if (!username || !email || !password || !dob) {
        errorMessage.textContent = "All fields are mandatory.";
        errorMessage.style.display = "block";
        return;
    }

    
    alert("Sign up successful!");
    hideSignUpForm();
}

function showForgotPassword() {
    document.getElementById("forgot-password-modal").style.display = "flex";
}

function hideForgotPassword() {
    document.getElementById("forgot-password-modal").style.display = "none";
    document.getElementById("forgot-email").value = ""; 
    document.getElementById("error-message").style.display = "none"; 
}

function verifyEmail() {
    const emailInput = document.getElementById("forgot-email").value;
    const errorMessage = document.getElementById("error-message");


    if (/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailInput)) {
        alert("Verification email sent to " + emailInput);
        hideForgotPassword();
    } else {
        errorMessage.style.display = "block"; 
    }
}

