// 1. Basic Selection and Styling

// Select the <h1> element and change its background color to blue.
document.querySelector('h1').style.backgroundColor = 'blue';

// Change the font size of all <p> elements to 18px.
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.style.fontSize = '18px';
});

// 2. Class Manipulation

// Add the class highlight to all list items (<li>).
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.classList.add('highlight');
});

// Toggle the highlight class on the <h2> element when a button is clicked.
const buttonToggle = document.querySelector('button');
const h2 = document.querySelector('h2');
buttonToggle.addEventListener('click', () => {
    h2.classList.toggle('highlight');
});

// 3. Content Manipulation

// Replace the text of the <h1> element with "DOM Manipulation is fun!"
document.querySelector('h1').textContent = 'DOM Manipulation is fun!';

// Append a new <li> item to the list with the text "Item 4".
const ul = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = 'Item 4';
ul.appendChild(newItem);

// 4. Event Handling

// Add an event listener to the #add-item button to add a new <li> element to the list.
const addButton = document.querySelector('#add-item');
addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    ul.appendChild(newItem);
});

// Change the <h2> text to whatever is typed in the input box when #change-title is clicked.
const changeButton = document.querySelector('#change-title');
const input = document.querySelector('input');
changeButton.addEventListener('click', () => {
    h2.textContent = input.value;
});

// 5. Traversing the DOM

// Find the parent of the <ul> element and change its background color.
ul.parentElement.style.backgroundColor = 'lightgrey';

// Log the next sibling of the <h2> element to the console.
console.log(h2.nextElementSibling);

// 6. Attributes

// Set a new attribute data-role="main" on the <div> with the id content.
const div = document.querySelector('#content');
div.setAttribute('data-role', 'main');

// Change the placeholder text of the input box to "Enter your name".
input.setAttribute('placeholder', 'Enter your name');

// 7. Dynamic Style Changes

// Toggle the visibility of the footer when the #toggle-footer button is clicked.
const toggleButton = document.querySelector('#toggle-footer');
const footer = document.querySelector('footer');
toggleButton.addEventListener('click', () => {
    footer.style.display = footer.style.display === 'none' ? 'block' : 'none';
});

// 8. Creating and Removing Elements

// Add a new paragraph dynamically with the text "This is a new paragraph."
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);

// Remove the <ul> from the DOM entirely.
ul.remove();

// 9. Event Delegation

// Use event delegation to log the text of any <li> clicked on the console.
ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});

// 10. Input Handling

// Log the value of the input box to the console every time a key is pressed.
input.addEventListener('input', () => {
    console.log(input.value);
});
