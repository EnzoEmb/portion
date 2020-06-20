const BASE = document.getElementById("base")
const CONTAINER = document.getElementById("content")
// const GRID_DROPZONE = document.getElementById("grid-dropzone")
const MAX_GRIDS = 5;
// const ELEMENT = document.querySelector(".element")

// cuando presiona un boton en el elemento con foco
document.activeElement.addEventListener("keypress", function (e) {
  // si el boton es enter
  if (e.keyCode == 13) {
    // añadimos nuevo row
    createRow(e);
  }
});


function createRow(e) {
  e.preventDefault();

  // añadimos nuevo row
  var PARENT = e.target.parentElement.parentElement.parentElement;
  PARENT.insertAdjacentHTML('afterend', '<div class="row"></div>');
  PARENT.nextSibling.insertAdjacentHTML('afterend', '<div class="row"><div class="column"><div class="element"><div class="element-content" contenteditable="true"></div></div></div></div>');
  PARENT.nextSibling.nextSibling.getElementsByClassName('element-content')[0].focus()

  // iniciamos el sortable en el grid-add
  // new Sortable(PARENT.nextSibling.getElementsByClassName('grid-add')[0], gridAddOptions);

  // console.log(PARENT.nextSibling);
  new Sortable(PARENT.nextSibling.nextSibling, {
    group: 'content',
    animation: 150,
    draggable: '.column',
    ghostClass: 'dragging',
    // swapThreshold: 0.65
    onRemove(e){
      alert('removed');
      console.log(e.from);
      console.log(e.from.childNodes.length);
      if(e.from.childNodes.length === 0){
        e.from.remove();
      }
    }
  });

  new Sortable(PARENT.nextSibling, {
    group: 'content',
    animation: 150,
    draggable: '.column',
    ghostClass: 'dragging',
    // swapThreshold: 0.65
  });

  // new Sortable(PARENT.nextSibling.getElementsByClassName('grid-add')[0], gridAddOptions);

}

// new Sortable(CONTAINER, {
//   group: 'content',
//   animation: 150,
//   draggable: '.row',
//   ghostClass: 'dragging',
//   // swapThreshold: 0.65
// });

new Sortable(document.getElementsByClassName('row')[0], {
  group: 'content',
  animation: 150,
  draggable: '.column',
  ghostClass: 'dragging',
  // swapThreshold: 0.65
});
