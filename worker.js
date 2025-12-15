// SHOW LOGGED-IN WORKER NAME
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("loggedInUser");

  if (!username) {
    alert("Please login first");
    window.location.href = "HTML1.html";
  }

  document.getElementById("Name").innerText = username;
});
