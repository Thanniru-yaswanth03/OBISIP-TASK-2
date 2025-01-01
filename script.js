
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


document.getElementById('contactForm').onsubmit = function (e) {
    e.preventDefault(); 
    alert('Thank you for your message! I will get back to you soon.');
    this.reset(); 
};
