function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    const newElement = document.createElement('div');
    newElement.textContent = draggedElement.textContent;
    newElement.className = "canvas-item";
    newElement.contentEditable = true; // Allow editing
    newElement.style.padding = '10px';
    newElement.style.margin = '10px';
    newElement.style.background = '#fff';
    newElement.style.border = '1px solid #ddd';
    newElement.style.width = '100%';
    
    event.target.appendChild(newElement);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
