const notifications = [
  {
    type: "workout",
    message: "Time for your daily workout! 💪",
  },

  {
    type: "water",
    message: "Remember to drink water! 💧",
  },

  {
    type: "motivation",
    message: "You got this! Keep pushing forward! 🌟",
  },

  {
    type: "workout",
    message: "Let's get moving! Exercise time! ⌚⏳",
  },

  {
    type: "water",
    message: "Stay hydrated! Take a water break. 🛀",
  },

  {
    type: "motivation",
    message: "Believe in yourself! You're capable of amazing things! 🌈",
  },

  {
    type: "workout",
    message: "You're getting stronger every day! Keep up the good work! 💪🔥",
  },

  {
    type: "motivation",
    message: "You're doing great! Keep pushing forward and never give up! 🚀✨",
  },

  {
    type: "workout",
    message: "You're one step closer to your fitness goals! Keep going! 🏋️‍♂️💯",
  },

  {
    type: "motivation",
    message:
      "You're amazing just the way you are! Keep shining your light! 🌟😊",
  },

];

function showNotification() {
  const randomNotification =
    notifications[Math.floor(Math.random() * notifications.length)];
  document.getElementById("notificationMessage").textContent =
    randomNotification.message;
  const panel = document.getElementById("notificationPanel");
  setTimeout(() => {
    panel.classList.add("show");
  }, 3000);
  setTimeout(() => {
    panel.classList.remove("show");
  }, 6000);
}

function closeNotification() {
  document.getElementById("notificationPanel").classList.remove("show");
}

window.onload = showNotification;
