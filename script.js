document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");
  const navbar = document.querySelector(".menu-area");
  const homeSection = document.getElementById("home");
  const contactSection = document.getElementById("contact");

  if (window.scrollY > homeSection.offsetHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });


  if (currentSection === "contact") {
    navbar.classList.add("navbar-contact");
  } else {
    navbar.classList.remove("navbar-contact");
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
