// let isloggedin = false;

// function ToggleProfileBtn() {
//   let profile = document.querySelector(".profile-icon");
//   if(profile){
//    console.log("done");
//   }
//   if (isloggedin === true) {
//     profile.style.display = "block";
//     isloggedin = false;
//   } else {
//     profile.style.display = "none";
//   }
// }

// ToggleProfileBtn();

// function login() {
//   isloggedin = true;
//   console.log('loggedin'); 
//   ToggleProfileBtn();
// }


function updateNavbar() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("signup-btn").style.display = "none";
      document.getElementById("profile-icon").style.display = "inline-block";
  } else {
      document.getElementById("login-btn").style.display = "inline-block";
      document.getElementById("signup-btn").style.display = "inline-block";
      document.getElementById("profile-icon").style.display = "none";
  }
}

function login() {
  localStorage.setItem("loggedIn", "true"); // Save login state
  updateNavbar(); // Update navbar instantly
}

function logout() {
  localStorage.removeItem("loggedIn"); // Remove login state
  updateNavbar(); // Update navbar instantly
}

document.addEventListener("DOMContentLoaded", updateNavbar);