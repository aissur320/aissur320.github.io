const input = document.getElementById("myInput");
const submit = document.getElementById("submit");
const form = document.getElementById("main-form");
const img = document.getElementById("main-img");
const content = document.getElementById("main-content");
const main = document.getElementById("main");

function updateLayout() {
    if(window.innerWidth < 500){
        main.insertBefore(img, content);
        img.src = "./assets/images/illustration-sign-up-mobile.svg";
    } else {
        main.insertBefore(content, img);
        img.src = "./assets/images/illustration-sign-up-desktop.svg";
    }
}

updateLayout();

window.addEventListener('resize', updateLayout);

input.addEventListener("focus", function() {
    if (input.placeholder === "email@company.com") {
        input.placeholder = "";
    }
});

input.addEventListener("blur", function() {
    if (input.placeholder === "") {
        input.placeholder = "email@company.com";
    }
});

submit.addEventListener("mousedown", function() {
    submit.style.backgroundColor = "var(--red)";
})

submit.addEventListener("mouseup", function() {
    submit.style.backgroundColor = "var(--blue8)";
})

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        const encodedEmail = encodeURIComponent(email);
        window.location.href = `./desktop-success.html?email=${encodedEmail}`;
    } else {
        if (input.style.backgroundColor != "var(--pink)"){
            input.style.backgroundColor = "var(--pink)";
            input.style.color = "var(--red)";
            input.style.border = "1px solid var(--red)";

            const row = document.querySelector("#span-row");
            const newSpan = document.createElement("span");
            newSpan.textContent = "Valid email required";
            newSpan.style.color = "var(--red)";
            newSpan.id = "newSpan";
            row.appendChild(newSpan);
        }
    }
})
