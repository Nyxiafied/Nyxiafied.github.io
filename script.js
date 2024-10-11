// Allow drop for canvas area
function allowDrop(event) {
    event.preventDefault();
}

// Handle drag event
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Handle drop event
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    
    let newElement;

    // Create new element based on template type
    switch (data) {
        case 'template1':
            newElement = document.createElement('h2');
            newElement.textContent = 'New Section Title';
            break;
        case 'template2':
            newElement = document.createElement('p');
            newElement.textContent = 'This is a new text block. You can edit me!';
            break;
        case 'template3':
            newElement = document.createElement('img');
            newElement.src = 'https://via.placeholder.com/150'; // Placeholder image
            newElement.alt = 'New Image';
            break;
        case 'template4':
            newElement = document.createElement('button');
            newElement.textContent = 'New Button';
            newElement.onclick = function () { alert('Button Clicked!'); };
            break;
        default:
            return;
    }

    newElement.className = "canvas-item";
    newElement.contentEditable = true; // Allow editing
    newElement.style.padding = '10px';
    newElement.style.margin = '10px';
    newElement.style.background = '#fff';
    newElement.style.border = '1px solid #ddd';

    event.target.appendChild(newElement);
}

// Change background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Save changes to local storage
function saveChanges() {
    const canvasContent = document.getElementById('canvas').innerHTML;
    const bgColor = document.body.style.backgroundColor;
    localStorage.setItem('canvasContent', canvasContent);
    localStorage.setItem('bgColor', bgColor);
    alert('Changes saved!');
}

// Load changes from local storage on page load
window.onload = function() {
    const savedCanvas = localStorage.getItem('canvasContent');
    const savedColor = localStorage.getItem('bgColor');
    if (savedCanvas) {
        document.getElementById('canvas').innerHTML = savedCanvas;
    }
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};
