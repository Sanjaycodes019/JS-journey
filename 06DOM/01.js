// Select the element with the ID 'title'
const title = document.getElementById('title');

// Get the current class attribute value
console.log('Initial class:', title.getAttribute('class'));

// Set a new class attribute value
title.setAttribute('class', 'test');
console.log('Updated class:', title.getAttribute('class'));

// Apply new styles to the element
title.style.backgroundColor = 'green'; // Set background color
title.style.padding = '15px';          // Add padding
title.style.borderRadius = '50%';      // Round the borders

// Log different types of text content
console.log('Text content:', title.textContent); // Get text content
console.log('Inner HTML:', title.innerHTML);     // Get inner HTML
console.log('Inner Text:', title.innerText);     // Get visible text
