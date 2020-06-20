const BASE = document.getElementById("base")
const CONTAINER = document.getElementById("content")
const GRID_DROPZONE = document.getElementById("grid-dropzone")
const MAX_GRIDS = 5;
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
    //   console.log('ENDED');
    // console.log(evt);
    //   if (evt.to.id == 'grid-dropzone') {
    //     createContent();
    //   }
    //   console.log(evt.to.id);
    document.querySelector('.sortable-focused').classList.remove('sortable-focused')
  },
  onMove: function (evt) {
    // console.log(evt);

    // console.log(evt);
    // console.log(evt.from);
    // console.log(evt.related);

    if (evt.related != evt.from) {
      evt.related.classList.add('sortable-focused')

    } else {
      evt.related.classList.remove('sortable-focused')

    }
  }
});


new Sortable(GRID_DROPZONE, {
  group: 'content',
  animation: 150,
  onAdd: function (/**Event*/evt) {
    GRID_DROPZONE.classList.add('has-element');
  },
  onMove: function (evt) {
    // console.log(evt);
    // console.log(GRID_DROPZONE.getElementsByClassName('element').length);
    if (GRID_DROPZONE.getElementsByClassName('element').length == 1) {
      GRID_DROPZONE.classList.remove('has-element')
    }
  }
});

// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
