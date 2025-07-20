// Publications JavaScript for name highlighting

document.addEventListener('DOMContentLoaded', function() {
  const namesToBold = [
    'Salgundi, A.,',
    'Anirudh, S.',
    'Salgundi, Anirudh',
    'Salgundi A',
    'Anirudh S',
    'Salgundi Anirudh'
  ];
  
  // Get all publication list items
  const publicationItems = document.querySelectorAll('.publication-category li');
  
  publicationItems.forEach(item => {
    let content = item.innerHTML;
    
    // Bold each name variation
    namesToBold.forEach(name => {
      // Create a regex that matches the name (case insensitive)
      const regex = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      content = content.replace(regex, `<strong>${name}</strong>`);
    });
    
    item.innerHTML = content;
  });
});