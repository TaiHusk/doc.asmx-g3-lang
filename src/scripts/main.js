// Create stars background
function createStars() {
  const container = document.getElementById('stars-container');
  const starCount = 150;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize star properties
    const size = Math.random() * 3;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const opacity = 0.2 + Math.random() * 0.8;
    const duration = 2 + Math.random() * 8;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    star.style.opacity = opacity;
    star.style.setProperty('--opacity', opacity);
    star.style.setProperty('--duration', `${duration}s`);
    star.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(star);
  }
}

// Header scroll effect
function handleHeaderScroll() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Copy code button functionality
function setupCopyButton() {
  const copyBtn = document.getElementById('copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeElement = document.querySelector('.language-asmx');
      if (codeElement) {
        const textArea = document.createElement('textarea');
        textArea.value = codeElement.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Show feedback
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      }
    });
  }
}

// Initialize animations on scroll
function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .step').forEach(element => {
    element.classList.add('animate-on-scroll');
    observer.observe(element);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  setupSmoothScrolling();
  setupCopyButton();
  setupAnimations();

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); // Initial check
});
