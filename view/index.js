
    const button = document.getElementById('toggle-theme');
    
    button.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        // Changer le texte du bouton en fonction du mode
        button.textContent = document.body.classList.contains('night-mode') ? 'Mode Clair' : 'Mode Nuit';
    });

