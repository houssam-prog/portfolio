'use strict';

/**
 * element toggle function
 */
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * dark & light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */
if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * Contact form submission with EmailJS
 */
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Création de l'objet avec les données du formulaire
  const templateParams = {
    from_name: this.from_name.value,
    from_email: document.getElementById('user_email').value,
    reply_to: this.reply_to.value,
    message: this.message.value,
    to_name: 'Houssam'
  };

  emailjs.send('service_1lmvygw', 'template_1yctzfg', templateParams)
    .then(function() {
      alert('Message envoyé avec succès!');
      document.getElementById('contact-form').reset();
    })
    .catch(function(err) {
      console.log('FAILED...', err);
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    });
});

/**
 * Render the ProjectGallery component
 */
import ReactDOM from 'react-dom/client';
import ProjectGallery from './ProjectGallery'; // Assurez-vous d'importer votre composant

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProjectGallery />
);
