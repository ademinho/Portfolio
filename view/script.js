// Fonction pour basculer le thème
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  body.setAttribute('data-theme', newTheme);
  
  // Sauvegarder la préférence dans le localStorage
  localStorage.setItem('theme', newTheme);
  
  // Changer l'icône
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.innerHTML = newTheme === 'light' ? '☀️' : '🌙';
}

// Initialiser le thème au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.innerHTML = savedTheme === 'light' ? '☀️' : '🌙';
  
  // Ajouter l'écouteur d'événement pour le bouton
  themeToggle.addEventListener('click', toggleTheme);
}); 