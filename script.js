document.addEventListener("DOMContentLoaded", function () {
  const heroImg = document.querySelector(".profile-img");
  const aboutImg = document.querySelector(".profile-img-a");

  setTimeout(() => {
    if (heroImg) heroImg.classList.add("animate");
    if (aboutImg) aboutImg.classList.add("animate");
  }, 300); // slight delay for smoother entrance
});
