function showSection(sectionId) {
    var sections = document.getElementsByClassName('content');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    document.getElementById(sectionId).style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
    const titleContainer = document.getElementById('title-container');
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#fcb6f0', '#ff9c00', '#f0e68c', '#98fb98', '#87cefa'];

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 1 + 0.5}s`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }

    setInterval(createConfetti, 100);
});

function showSection(sectionId) {
    var sections = document.getElementsByClassName('content');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    var links = document.querySelectorAll('nav a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('nav-selected');
    }
    document.getElementById(sectionId).style.display = 'block';
    document.querySelector('nav a[href="#'+sectionId+'"]').classList.add('nav-selected');
}
function redirectToLogin() {
    window.location.href = "Login/login.html"
}




