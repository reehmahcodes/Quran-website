var myButton = document.getElementById("myButton")
var aboutSurah = document.getElementById("aboutSurah")

myButton.addEventListener("click", function () {
    if (aboutSurah.style.display === "none") {
        aboutSurah.style.display = "block";
    }else {
        aboutSurah.style.display = "none";
    }
})

var iButton = document.getElementById("iButton")
var myButton = document.getElementById("myButton")

iButton.addEventListener("click", function() {
    if (aboutSurah.style.display === "block") {
        aboutJuz.style.display = "none";
    }else {
        aboutJuz.style.display = "block";
    }
})

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.length < 2 || password.length < 2) {
    alert('username and password must not be atleast two characters long')
    return false;
    }

    console.log ('form submitted successfully');
    return true;
}

function validateForm() {
    // Perform client-side validation
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false; // Prevent form submission
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false; // Prevent form submission
    }

    console.log('Form submitted successfully!');
      return true; // Allow form submission

      function validateEmail(email) {
        // Simple email validation using a regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0px"
}

function hideMenu() {
    navLinks.style.right = "-200px"
}