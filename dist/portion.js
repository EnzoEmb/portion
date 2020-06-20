const BASE = document.getElementById("base")
const CONTAINER = document.getElementById("content")
const GRID_DROPZONE = document.getElementById("grid-dropzone")
// const ELEMENT = document.querySelector(".element")

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

function createContent(e) {
  CONTAINER.insertAdjacentHTML('afterend', '<section id="content-2" class="content"></section>');
  var newContent = document.getElementById("content-2");
  new Sortable(newContent, {
    group: 'content',
    animation: 150
  });

}

new Sortable(CONTAINER, {
  group: 'content',
  animation: 150,
  ghostClass: 'dragging',
  // onStart: function (evt) {
  //   console.log(evt);
  // },
  onEnd: function (/**Event*/evt) {
    console.log('ENDED');
    console.log(evt.to);
    if (evt.to.id == 'grid-dropzone') {
      createContent();
    }
    console.log(evt.to.id);
  },
});


new Sortable(GRID_DROPZONE, {
  group: 'content',
  animation: 150
});

// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
