// Récupération des éléments HTML5
const progress = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");

// Création de la variable stepNumber reglé de base à 0
let stepNumber = 0;

// Déclaration de la fonction updateProgressBar qui va permettre la progression de la barre
const updateProgressBar = () => {
  // Création des constantes mulitplier et width
  const multiplier = 100 / (steps.length - 1);
  const width = stepNumber * multiplier;
  //console.log(width);
  progress.style.transform = `scaleX(${width}%)`;
};

// Déclaration de la fonction updateStepDisplay qui va permettre la mise à jour de l'affichage des steps
const updateStepDisplay = () => {
  // pour chaque step
  steps.forEach((step, index) => {
    step.classList.toggle("active", index <= stepNumber);
  });
};

// Déclaration de la fonction updateButtonState qui va permettre de mettre à jour l'état des boutons
const updateButtonState = () => {
  prevBtn.disabled = stepNumber === 0;
  nextBtn.disabled = stepNumber === steps.length - 1;
};

// Déclaration de la fonction updateStep qui va permettre la mise à  jour des étapes
const updateStep = (direction) => {
  stepNumber += direction;
  // Condition IF
  if (stepNumber >= 0 && stepNumber < steps.length) {
    // Appel des fonctions
    updateProgressBar();
    updateStepDisplay();
    updateButtonState();
  }
};

// Ecoute de l'événement "click" sur les boutons et appel de la fonction updateStep
prevBtn.addEventListener("click", () => updateStep(-1));
nextBtn.addEventListener("click", () => updateStep(1));
