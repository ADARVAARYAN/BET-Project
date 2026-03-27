function login() {
    let username = document.querySelector("input[type=text]").value;
    let password = document.querySelector("input[type=password]").value;

    if (username === "student" && password === "rgm123") {
        window.location.href = "events.html";
    } else {
        alert("Invalid Username or Password");
    }
}
function goDashboard() {
    window.location.href = "dashboard.html";
}