function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (username === "" || password === "") {
        message.textContent = "Please enter username and password.";
        message.style.color = "red";
        return;
    }

    // Allow any username and password
    message.textContent = "Login successful!";
    message.style.color = "green";

    // Save the username
    localStorage.setItem("username", username);

    // Go to the next page
    setTimeout(function () {
        window.location.href = "verify.html";
    }, 500);
}