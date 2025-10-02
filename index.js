// =================== Hero Typed Text ===================
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Software Developer", "Designer", "Creative Thinker"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, typingDelay + 500);
  }
}

// =================== DOMContentLoaded ===================
document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);

  // Animate profile images
  document.querySelectorAll(".profile-img, .profile-img-a").forEach(img => img.classList.add("animate"));

  // =================== Portfolio Toggle ===================
  const portfolioButtons = document.querySelectorAll(".portfolio-toggle .btn");
  const portfolioTopics = document.querySelectorAll(".portfolio-topic");

  portfolioButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Button active class
      portfolioButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Show selected portfolio topic
      portfolioTopics.forEach(topic => (topic.style.display = "none"));
      portfolioTopics[index].style.display = "grid";
    });
  });

  // Initially show first topic
  if (portfolioTopics.length > 0) {
    portfolioTopics.forEach((topic, i) => (topic.style.display = i === 0 ? "grid" : "none"));
    portfolioButtons[0].classList.add("active");
  }

  // =================== Skills & Tools Toggle ===================
  const skillsBtn = document.getElementById("skills-btn");
  const toolsBtn = document.getElementById("tools-btn");
  const skillsContent = document.getElementById("skills-content");
  const toolsContent = document.getElementById("tools-content");

  skillsBtn.addEventListener("click", () => {
    skillsBtn.classList.add("active");
    toolsBtn.classList.remove("active");
    skillsContent.style.display = "flex";
    toolsContent.style.display = "none";
  });

  toolsBtn.addEventListener("click", () => {
    toolsBtn.classList.add("active");
    skillsBtn.classList.remove("active");
    toolsContent.style.display = "flex";
    skillsContent.style.display = "none";
  });

  // Initially show skills
  skillsContent.style.display = "flex";
  toolsContent.style.display = "none";
  skillsBtn.classList.add("active");
});

// =================== Active Navbar on Scroll ===================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});
