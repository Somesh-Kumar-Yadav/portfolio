// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let scrollBtn = document.querySelector(".scroll-button a");
menuBtn.onclick = function () {
	navBar.classList.add("active");
	menuBtn.style.opacity = "0";
	menuBtn.style.pointerEvents = "none";
	body.style.overflow = "scroll";
	scrollBtn.style.pointerEvents = "auto";
};
cancelBtn.onclick = function () {
	navBar.classList.remove("active");
	menuBtn.style.opacity = "1";
	menuBtn.style.pointerEvents = "auto";
	body.style.overflow = "scroll";
	scrollBtn.style.pointerEvents = "auto";
};

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", function () {
		navBar.classList.remove("active");
		menuBtn.style.opacity = "1";
		menuBtn.style.pointerEvents = "auto";
	});
}
function sendEmail() {
	let name = document.querySelector("#name").value;
	let email = document.querySelector("#email").value;
	let message = document.querySelector("#message").value;
	if (name.length === 0) {
		alert("Enter Name");
		return;
	}
	if (email.length === 0) {
		alert("Enter E-mail");
		return;
	}
	if (email.includes("@") === false || email.includes(".") === false) {
		alert("Invalid email");
		return;
	}
	Email.send({
		Host: "smtp.gmail.com",
		Username: "portfolioccnt@gmail.com",
		Password: "Portfolio@123",
		To: "someshkumar71524@gmail.com",
		From: "portfolioccnt@gmail.com",
		Subject: "From portfolio",
		Body: `Name - ${name}
		email -${email}
		message -${message}`,
	}).then((message) => alert("message sent successfully"));
}
