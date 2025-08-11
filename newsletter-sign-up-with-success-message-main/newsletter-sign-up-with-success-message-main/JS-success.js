const dismiss = document.getElementById("dismiss");
const userEmail = document.getElementById("user-email");
const params = new URLSearchParams(window.location.search);
const email = params.get("email");

if(email) {
    userEmail.innerHTML += `${email}` 
}

dismiss.addEventListener("mousedown", function() {
    dismiss.style.backgroundColor = "var(--red)";
})

dismiss.addEventListener("mouseup", function() {
    dismiss.style.backgroundColor = "var(--blue8)";
})

dismiss.addEventListener("click", function() {
    window.location.href="./index.html";
})