// Contact Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        showMessage('Please fill in all fields.', 'error');
        return;
      }
      
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      // In a real implementation, you would send data to server here
      // For demonstration, we'll simulate a successful submission
      simulateFormSubmission(name);
    });
  }
  
  function simulateFormSubmission(name) {
    // Show loading message
    showMessage('Sending message...', 'info');
    
    // Simulate server delay
    setTimeout(function() {
      // Clear form fields
      contactForm.reset();
      
      // Show success message
      showMessage(`Thank you, ${name}! Your message has been sent successfully. I'll respond as soon as possible.`, 'success');
    }, 1500);
  }
  
  function showMessage(text, type) {
    formMessage.textContent = text;
    
    // Remove all classes
    formMessage.className = 'form-message';
    
    // Add appropriate class
    formMessage.classList.add(type);
    
    // Set animation
    formMessage.style.animation = 'none';
    setTimeout(function() {
      formMessage.style.animation = 'fadeIn 0.5s ease forwards';
    }, 10);
    
    // Auto clear error messages after 5 seconds
    if (type === 'error') {
      setTimeout(function() {
        formMessage.style.animation = 'fadeIn 0.5s ease reverse forwards';
        setTimeout(function() {
          formMessage.textContent = '';
          formMessage.className = 'form-message';
        }, 500);
      }, 5000);
    }
  }
  
  // Form field animations
  const formFields = document.querySelectorAll('.form-group input, .form-group textarea');
  
  formFields.forEach(field => {
    // Focus effect
    field.addEventListener('focus', function() {
      this.parentElement.querySelector('label').style.color = 'var(--color-primary)';
    });
    
    // Blur effect
    field.addEventListener('blur', function() {
      this.parentElement.querySelector('label').style.color = '';
    });
  });
});