const form = document.querySelector("#contact-form");

emailjs.init({
  publicKey: "n84lAgtnRdT9rEwZ_"
});

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm(
      "service_nwlt612",
      "template_yyj5ibw",
      form
    ).then(function () {
      alert("Thank you for your message! I will get back to you soon.");
      form.reset();
    }, function (error) {
      alert("Something went wrong. Please try again.");
      console.log(error);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const catLogo = document.getElementById("cat-logo");
  if (catLogo) {
    const meowSound = new Audio("assets/meow.mp3");
    catLogo.addEventListener("click", () => {
      meowSound.currentTime = 0;
      meowSound.play().catch(err => console.log("Audio error:", err));
    });
  }


});
