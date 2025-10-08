document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach((button) => {
    button.addEventListener("click", function () {
      const accordionItem = this.parentElement;

      // Toggle the current item
      accordionItem.classList.toggle("active");

      // Toggle the plus/minus icon
      const plusIcon = this.querySelector(".plus-icon");
      if (accordionItem.classList.contains("active")) {
        plusIcon.textContent = "-";
      } else {
        plusIcon.textContent = "+";
      }

      // Close other items
      accordionBtns.forEach((btn) => {
        if (btn !== button) {
          btn.parentElement.classList.remove("active");
          btn.querySelector(".plus-icon").textContent = "+";
        }
      });
    });
  });
});

// Smooth Scroll for Navigation
// document.querySelectorAll(".header-nav a").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// });

// Smooth Scroll only for internal anchors starting with #
document.querySelectorAll(".header-nav a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});


// Toggle About Me Section on Button Click
const aboutBtn = document.getElementById("about-btn");
const aboutMore = document.getElementById("about-more");

aboutBtn.addEventListener("click", () => {
  if (aboutMore.style.display === "none" || aboutMore.style.display === "") {
    aboutMore.style.display = "block";
    aboutBtn.textContent = "Show Less About Me";
  } else {
    aboutMore.style.display = "none";
    aboutBtn.textContent = "Learn More About Me";
  }
});

// Contact Form Submission Handling
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
  contactForm.reset();
});

// Redirect button function
function redirectToPage() {
  window.location.href = "about.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion-btn");

  accordionBtns.forEach((button) => {
    button.addEventListener("click", function () {
      const accordionItem = this.parentElement;

      // Toggle the current item
      accordionItem.classList.toggle("active");

      // Toggle the plus/minus icon
      const plusIcon = this.querySelector(".plus-icon");
      if (accordionItem.classList.contains("active")) {
        plusIcon.textContent = "-";
      } else {
        plusIcon.textContent = "+";
      }

      // Close other items
      accordionBtns.forEach((btn) => {
        if (btn !== button) {
          btn.parentElement.classList.remove("active");
          btn.querySelector(".plus-icon").textContent = "+";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const btn = item.querySelector(".accordion-btn");

    btn.addEventListener("click", function () {
      item.classList.toggle("active");

      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});
