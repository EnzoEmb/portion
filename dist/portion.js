const CONTAINER = document.getElementById("content")
const ELEMENT = document.querySelector(".element")



// cuando presiona un boton en el elemento con foco
document.activeElement.addEventListener("keypress", function (e) {
  // si el boton es enter
  if (e.keyCode == 13) {
    // añadimos nuevo parrafo
    createElement(e);
    // CONTAINER.insertAdjacentHTML('beforeend', '<div class="element" draggable="true"><div class="element-content" contenteditable="true"></div></div>');
    // document.querySelector('.element:last-child').focus();
    // setTimeout(function(){
      
    // CONTAINER.lastChild.focus()
    // }, 100)
    // e.target.insertAdjacentHTML('afterend', '<div class="element" contenteditable="true"></div>');
    // setTimeout(function(){CONTAINER.lastChild.focus()}, 500);

  }


});


function createElement(e) {
  e.preventDefault();
  // añadimos nuevo parrafo
  var PARENT = e.target.parentElement;
  PARENT.insertAdjacentHTML('afterend', '<div class="element" draggable="true"><div class="element-content" contenteditable="true"></div></div>');
  PARENT.nextSibling.getElementsByClassName('element-content')[0].focus()


  // CONTAINER.insertAdjacentHTML('beforeend', '<div class="element" draggable="true"><div class="element-content" contenteditable="true"></div></div>');
  // CONTAINER.lastChild.getElementsByClassName('element-content')[0].focus();

}

new Sortable(CONTAINER, {
  group: 'content',
  animation: 150,
  ghostClass: 'dragging'
});