const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const topVisible = rect.top >= windowHeight * 0.2 && rect.top <= windowHeight * 0.7;

    if (topVisible) {
      section.classList.add('revealed');
    } else {
      section.classList.remove('revealed');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
