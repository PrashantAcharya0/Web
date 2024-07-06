function ValidateForm() {
  // var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var name = document.getElementById("uname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var gender = document.querySelectorAll('input[name="Gender"]:checked');
  var skills = document.querySelectorAll('input[name="skill"]:checked');
  var country = document.getElementsByClassName("country").value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 3 || name.length > 50) {
    var paragraph = document.createElement("p");
    paragraph.innerText = "Invalid username";
    paragraph.id = "username_error";
    paragraph.className = "error";
    paragraph.style.color = "red";
    document.getElementById("user_name").appendChild(paragraph);
  }

  if (phone.length !== 10) {
    document.getElementById("phone").innerHTML = "Invalid phone number";
  }

  if (!emailRegex.test(email)) {
    document.getElementById("email_error").innerHTML = "Invalide email format";
  }

  function check_error() {
    var name = document.getElementById("uname").value;
    if ((name.length > 3) & (name.length < 50)) {
      document.getElementById("user_name").removeChild();
    }
  }

  function clearAlerts() {
    // Clear previous alerts
    var alerts = document.querySelectorAll(".alert");
    alerts.forEach(function (alert) {
      alert.remove();
    });
  }
}
