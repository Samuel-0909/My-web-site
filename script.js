// Gestion du menu mobile (Burger Menu)
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-links");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Fermer le menu mobile lorsqu'on clique sur un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
  });
});

// Intercepter la soumission du formulaire de contact
// const contactForm = document.querySelector("#contact-form");

// contactForm.addEventListener("submit", function (e) {
//   e.preventDefault(); // Empêche le rechargement de la page

//   // Récupération des valeurs
//   const name = document.querySelector("#name").value;
//   const email = document.querySelector("#email").value;
//   const message = document.querySelector("#message").value;

//   // Exemple simple de retour utilisateur
//   alert(
//     `Merci pour votre message, ${name} ! (Simulation d'envoi réussie pour ${email})`,
//   );

//   // Réinitialiser le formulaire
//   contactForm.reset();
// });
