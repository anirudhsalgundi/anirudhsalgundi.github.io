// // Main JavaScript File

// // Mobile Menu Toggle
// document.addEventListener('DOMContentLoaded', function() {
//   const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//   const navLinks = document.querySelector('.nav-links');

//   if (mobileMenuBtn) {
//     mobileMenuBtn.addEventListener('click', function() {
//       navLinks.classList.toggle('active');
//       mobileMenuBtn.classList.toggle('active');

//       // Transform hamburger into X
//       const spans = mobileMenuBtn.querySelectorAll('span');
//       if (mobileMenuBtn.classList.contains('active')) {
//         spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
//         spans[1].style.opacity = '0';
//         spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
//       } else {
//         spans[0].style.transform = 'none';
//         spans[1].style.opacity = '1';
//         spans[2].style.transform = 'none';
//       }
//     });
//   }

//   // Add fade-in class to elements as they become visible during scroll
//   const fadeElements = document.querySelectorAll('.cv-item, .project-card, .publication-item');
  
//   // Create an observer
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.animationPlayState = 'running';
//         // Unobserve after animation is triggered
//         observer.unobserve(entry.target);
//       }
//     });
//   }, {
//     threshold: 0.1 // Trigger when 10% of the element is visible
//   });

//   // Observe each fade element
//   fadeElements.forEach(element => {
//     element.style.animationPlayState = 'paused';
//     observer.observe(element);
//   });

//   // Highlight active page in navigation
//   const currentPath = window.location.pathname;
//   const navItems = document.querySelectorAll('.nav-links li');
  
//   navItems.forEach(item => {
//     const link = item.querySelector('a');
//     const href = link.getAttribute('href');
    
//     if (currentPath.endsWith(href)) {
//       item.classList.add('active');
//     } else if (currentPath.endsWith('/') && href === 'index.html') {
//       item.classList.add('active');
//     }
//   });
// });

// // Function to create stars dynamically in the background
// function createStars() {
//   const starsContainer = document.querySelector('.stars');
//   if (!starsContainer) return;

//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   const starCount = Math.floor((width * height) / 1000); // Adjust density as needed
  
//   for (let i = 0; i < starCount; i++) {
//     const star = document.createElement('div');
//     star.classList.add('star');
    
//     // Random positioning
//     const left = Math.floor(Math.random() * width);
//     const top = Math.floor(Math.random() * height);
    
//     // Random size for variety
//     const size = Math.random() * 2;
    
//     // Random opacity for twinkling effect
//     const opacity = Math.random() * 0.8 + 0.2;
    
//     // Apply styles
//     star.style.left = left + 'px';
//     star.style.top = top + 'px';
//     star.style.width = size + 'px';
//     star.style.height = size + 'px';
//     star.style.opacity = opacity;
    
//     // Random animation delay for twinkling effect
//     star.style.animationDelay = Math.random() * 5 + 's';
    
//     starsContainer.appendChild(star);
//   }
// }

// // Call function when DOM is loaded
// document.addEventListener('DOMContentLoaded', createStars);

// // Recreate stars on window resize
// window.addEventListener('resize', function() {
//   const starsContainer = document.querySelector('.stars');
//   if (starsContainer) {
//     starsContainer.innerHTML = '';
//     createStars();
//   }
// });


// document.querySelectorAll('.project-link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const modal = document.getElementById('projectModal');
//     const iframe = document.getElementById('modalIframe');
//     iframe.src = this.getAttribute('data-src');
//     modal.style.display = 'block';
//   });
// });

// Main JavaScript File

// Main JavaScript File

document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');

      const spans = mobileMenuBtn.querySelectorAll('span');
      if (mobileMenuBtn.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Scroll-triggered fade-in animation
  const fadeElements = document.querySelectorAll('.cv-item, .project-card, .publication-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(element => {
    element.style.animationPlayState = 'paused';
    observer.observe(element);
  });

  // Highlight active page in navigation
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-links li');

  navItems.forEach(item => {
    const link = item.querySelector('a');
    const href = link.getAttribute('href');

    if (currentPath.endsWith(href)) {
      item.classList.add('active');
    } else if (currentPath.endsWith('/') && href === 'index.html') {
      item.classList.add('active');
    }
  });

  // Modal logic (inline, no iframe)
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const src = this.getAttribute('data-src');
      if (!src) return;

      fetch(src + '?v=' + Date.now())
        .then(response => response.text())
        .then(html => {
          modalContent.innerHTML = html;
          modal.style.display = 'block';
          document.body.classList.add('modal-open');
        })
        .catch(err => {
          modalContent.innerHTML = "<p>Failed to load project details.</p>";
          modal.style.display = 'block';
        });
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      modalContent.innerHTML = '';
      document.body.classList.remove('modal-open');
    });
  }

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalContent.innerHTML = '';
      document.body.classList.remove('modal-open');
    }
  });

  // Star field generation
  createStars();
});

function createStars() {
  const starsContainer = document.querySelector('.stars');
  if (!starsContainer) return;

  const width = window.innerWidth;
  const height = window.innerHeight;
  const starCount = Math.floor((width * height) / 1000);

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const left = Math.floor(Math.random() * width);
    const top = Math.floor(Math.random() * height);
    const size = Math.random() * 2;
    const opacity = Math.random() * 0.8 + 0.2;

    star.style.left = left + 'px';
    star.style.top = top + 'px';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.opacity = opacity;
    star.style.animationDelay = Math.random() * 5 + 's';

    starsContainer.appendChild(star);
  }
}

// Recreate stars on resize
window.addEventListener('resize', function () {
  const starsContainer = document.querySelector('.stars');
  if (starsContainer) {
    starsContainer.innerHTML = '';
    createStars();
  }
});