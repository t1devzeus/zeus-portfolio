// Functions to navigate to pages and scroll to sections
function goToProjectsPage() {
    window.location.href = 'projects/';
}

function goToAboutSection() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function goToSkillsSection() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
}

function goToGetInTouchPage() {
    window.location.href = 'https://discord.com/users/944959943310737408';
}

// Event listeners
document.querySelector('.projects_btn').addEventListener('click', goToProjectsPage);
document.querySelector('.about_btn').addEventListener('click', goToAboutSection);
document.querySelector('.skills_btn').addEventListener('click', goToSkillsSection);
document.querySelector('.getInTouch_btn').addEventListener('click', goToGetInTouchPage);

// Title animation
const animatedTitle = 'BEST DEVELOPER!🎉';
const originalTitle = document.title;

function animateTitle() {
    let toggleTitle = true;
    setInterval(() => {
        document.title = toggleTitle ? animatedTitle : originalTitle;
        toggleTitle = !toggleTitle;
    }, 2000);
}

animateTitle();
