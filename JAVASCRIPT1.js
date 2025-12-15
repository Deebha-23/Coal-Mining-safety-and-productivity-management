/* =========================
   Language Translations
========================= */
const translations = {
  en: {
    title: "MinePro - Safety & Productivity",
    employeeID: "Employee ID",
    password: "Password",
    role: "Role",
    roles: {
      worker: "Worker",
      supervisor: "Supervisor",
      other: "Other Personnel"
    },
    loginBtn: "Log In",
    forgotPassword: "Forgot Password?",
    helpSupport: "Help/Support"
  },
  ta: {
    title: "MinePro - பாதுகாப்பு & உற்பத்தித்திறன்",
    employeeID: "பணியாளர் ஐடி",
    password: "கடவுச்சொல்",
    role: "பங்கு",
    roles: {
      worker: "தொழிலாளி",
      supervisor: "மேற்பார்வையாளர்",
      other: "பிற பணியாளர்கள்"
    },
    loginBtn: "உள்நுழைய",
    forgotPassword: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
    helpSupport: "உதவி/ஆதரவு"
  },
  hi: {
    title: "MinePro - सुरक्षा और उत्पादकता",
    employeeID: "कर्मचारी आईडी",
    password: "पासवर्ड",
    role: "भूमिका",
    roles: {
      worker: "कर्मचारी",
      supervisor: "प्रबंधक",
      other: "अन्य कर्मचारी"
    },
    loginBtn: "लॉग इन",
    forgotPassword: "पासवर्ड भूल गए?",
    helpSupport: "सहायता/समर्थन"
  }
};

/* =========================
   Language Switch
========================= */
document.getElementById("language").addEventListener("change", function () {
  const lang = this.value;
  document.querySelector("h2").innerText = translations[lang].title;
  document.querySelector("label[for='username']").innerText = translations[lang].employeeID;
  document.querySelector("label[for='password']").innerText = translations[lang].password;
  document.querySelector("label[for='role']").innerText = translations[lang].role;
});

/* =========================
   SIGN UP (REGISTER)
========================= */
document.getElementById("signupBtn").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!username || !password || !role) {
    alert("Please fill all fields to sign up");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    alert("User already exists. Please login.");
    return;
  }

  users.push({ username, password, role });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! You can now login.");
});

/* =========================
   LOGIN
========================= */
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!username || !password || !role) {
    alert("Please fill all fields");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    user =>
      user.username === username &&
      user.password === password &&
      user.role === role
  );

  if (!validUser) {
    alert("Invalid login details or user not registered");
    return;
  }

  alert("Login successful");

  if (role === "worker") {
  localStorage.setItem("loggedInUser", username);
  window.location.href = "worker.html";
}

  else if (role === "supervisor") {
  localStorage.setItem("loggedInUser", username);
  window.location.href = "supervisor.html";
}
 else {
    window.location.href = "other_dashboard.html";
  }
});
