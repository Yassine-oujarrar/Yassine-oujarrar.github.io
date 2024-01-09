function startAnimationWhenVisible(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('start-animation'); 
        }
    });
}

const observer = new IntersectionObserver(startAnimationWhenVisible, {
    root: null,
    threshold: 0.5, 
});

const skillContents = document.querySelectorAll('.skills-content');

skillContents.forEach(skill => {
    observer.observe(skill);
});
