const CONTAINER = document.getElementById("content")
const ELEMENT = document.querySelector(".element")

// cuando presiona un boton en el elemento con foco
document.activeElement.addEventListener("keypress", function (e) {
  // si el boton es enter
  if (e.keyCode == 13) {
    // añadimos nuevo parrafo
    createElement(e);
  }
});


function createElement(e) {
  e.preventDefault();
  // añadimos nuevo parrafo
  var PARENT = e.target.parentElement;
  PARENT.insertAdjacentHTML('afterend', '<div class="element" draggable="true"><div class="element-content" contenteditable="true"></div></div>');
  PARENT.nextSibling.getElementsByClassName('element-content')[0].focus()

}

new Sortable(CONTAINER, {
  group: 'content',
  animation: 150,
  ghostClass: 'dragging'
});