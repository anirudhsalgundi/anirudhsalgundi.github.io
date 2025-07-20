// Animations JavaScript

// Letter-by-letter animation for the name
document.addEventListener('DOMContentLoaded', function() {
  const animatedText = document.querySelector('.animated-text');
  
  if (animatedText) {
    const text = animatedText.textContent;
    animatedText.textContent = '';
    
    // Wrap each character in a span, including spaces
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      // Add a non-breaking space class for actual spaces
      if (text[i] === ' ') {
        span.innerHTML = '&nbsp;';
      }
      span.style.animationDelay = `${0.1 + (i * 0.05)}s`;
      animatedText.appendChild(span);
    }
  }
  
  // Animate elements when they come into view
  const animateOnScroll = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1
  });
  
  // Select elements to animate
  const elementsToAnimate = document.querySelectorAll('.bio, .social-links, .cv-item, .project-card');
  
  // Observe each element
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });

  // Parallax effect for background stars
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const stars = document.querySelector('.stars');
    
    if (stars) {
      stars.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const img = this.querySelector('.project-image img');
      if (img) {
        img.style.transform = 'scale(1.05)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const img = this.querySelector('.project-image img');
      if (img) {
        img.style.transform = 'scale(1)';
      }
    });
  });
});