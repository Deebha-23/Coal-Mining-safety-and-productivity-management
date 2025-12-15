// Auto set supervisor name after login
document.addEventListener("DOMContentLoaded", () => {

  // Example: value saved during login
  const supervisorName = localStorage.getItem("loggedInUser");

  if (supervisorName) {
    document.getElementById("userName").textContent =
      supervisorName + " | Supervisor";
  } else {
    document.getElementById("userName").textContent =
      "Deebha | Supervisor";
  }

});
