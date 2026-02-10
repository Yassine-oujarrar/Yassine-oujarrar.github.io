function startAnimationWhenVisible(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Vérifie si l'animation a déjà été effectuée
            if (!entry.target.classList.contains('animated')) {
                entry.target.classList.add('start-animation'); 
                entry.target.classList.add('animated'); // Marque comme animé
                animatePercentage(entry.target);
            }
        }
    });
}

function animatePercentage(skillElement) {
    const numberElement = skillElement.querySelector('.number');
    const percentageText = numberElement.textContent;
    const targetPercentage = parseInt(percentageText);
    
    // Reset to 0%
    numberElement.textContent = '0%';
    
    // Animate from 0 to target percentage
    let currentPercentage = 0;
    const duration = 2000; // 2 seconds to match the SVG animation
    const increment = targetPercentage / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
        currentPercentage += increment;
        if (currentPercentage >= targetPercentage) {
            currentPercentage = targetPercentage;
            clearInterval(timer);
        }
        numberElement.textContent = Math.floor(currentPercentage) + '%';
    }, 16);
}

const observer = new IntersectionObserver(startAnimationWhenVisible, {
    root: null,
    threshold: 0.5, 
});

const skillContents = document.querySelectorAll('.skills-content');

skillContents.forEach(skill => {
    observer.observe(skill);
});
