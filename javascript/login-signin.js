// // Function to handle sign-up
// function signUp() {
//   const username = document.getElementById("username").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("pass").value;

//   // Check if user already exists
//   if (localStorage.getItem(username)) {
//     alert("User  already exists! Please log in.");
//     return;
//   }

//   // Store user data in local storage
//   const userData = {
//     username: username,
//     email: email,
//     password: password,
//   };

//   localStorage.setItem(username, JSON.stringify(userData));
//   alert("Sign up successful! You can now log in.");
//   // Optionally, redirect to login page
//   window.location.href = "./login.html";
// }

// // Function to handle login
// function login() {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("pass").value;

//   // Retrieve user data from local storage
//   const userData = JSON.parse(localStorage.getItem(username));

//   // Validate credentials
//   if (userData && userData.password === password) {
//     alert("Login successful!");
//     // Redirect to home or dashboard page
//     window.location.href = "./home.html";
//   } else {
//     alert("Invalid username or password. Please try again.");
//   }
// }

// // Event listeners for sign-up and login
// document
//   .querySelector(".input-submit")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form submission
//     signUp(); // Call signUp function
//   });

// // Assuming you have a login button in your login.html page
// document
//   .getElementById("login_button")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form submission
//     login(); // Call login function
//   });






// Function to handle sign-up
function signUp() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;

  if (!username || !email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  // Check if user already exists
  if (localStorage.getItem(username)) {
    alert("User already exists! Please log in.");
    return;
  }

  // Store user data in local storage
  const userData = {
    username: username,
    email: email,
    password: password,
  };

  localStorage.setItem(username, JSON.stringify(userData));
  alert("Sign up successful! You can now log in.");
  window.location.href = "./login.html";
}

// Function to handle login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("pass").value;

  if (!username || !password) {
    alert("Please enter both username and password!");
    return;
  }

  // Retrieve user data from local storage
  const userData = JSON.parse(Storagelocal.getItem(username));

  if (userData && userData.password === password) {
    alert("Login successful!");

    // Store logged-in user status
    localStorage.setItem("loggedInUser", username);
    localStorage.setItem("loggedIn", "true");

    // Redirect to home page
    window.location.href = "./index.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

// Function to handle logout
function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("loggedIn");
  updateNavbar();
}

// Function to update navbar after login/logout
function updateNavbar() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");
  const profileIcon = document.getElementById("profile-icon");

  if (loginLink && signupLink && profileIcon) {
    if (isLoggedIn) {
      loginLink.style.display = "none";
      signupLink.style.display = "none";
      profileIcon.style.display = "inline-block";
    } else {
      loginLink.style.display = "inline-block";
      signupLink.style.display = "inline-block";
      profileIcon.style.display = "none";
    }
  }
}

// Run navbar update when page loads
document.addEventListener("DOMContentLoaded", function () {
  updateNavbar();

  // Event listeners for sign-up and login buttons
  const signupButton = document.querySelector(".input-submit");
  if (signupButton) {
    signupButton.addEventListener("click", function (event) {
      event.preventDefault();
      signUp();
    });
  }

  const loginButton = document.getElementById("login_button");
  if (loginButton) {
    loginButton.addEventListener("click", function (event) {
      event.preventDefault();
      login();
    });
  }
});