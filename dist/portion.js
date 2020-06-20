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
  PARENT.insertAdjacentHTML('afterend', '<div class="row"><div class="column"><div class="element"><div class="element-content" contenteditable="true"></div></div></div><div class="grid-add"></div></div>');
  PARENT.nextSibling.getElementsByClassName('element-content')[0].focus()

  // iniciamos el sortable en el grid-add
  new Sortable(PARENT.nextSibling.getElementsByClassName('grid-add')[0], gridAddOptions);
}


var gridAddOptions = {
  group: 'content',
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,

  onAdd: function (evt) {

    console.log(evt);
    // alert('asdasd');

    // console.log(evt.item.getElementsByClassName('column')[0]);
    // console.log(evt.target.parentElement)
    // evt.target.parentElement.appendChild(evt.item.getElementsByClassName('column')[0])
    evt.target.parentElement.insertBefore(evt.item.getElementsByClassName('column')[0], evt.target)
    // console.log(evt.item);
    evt.item.remove();
    // evt.target.insertBefore(evt.item.getElementsByClassName('column')[0])
    // console.log(evt.target.parentElement.querySelector('.column:last-child'))
    // console.log(evt.target.parentElement.querySelector('.column:last-child'))
    // .appendChild(evt.item.getElementsByClassName('column')[0])


  }
}





// function createContent(e) {
//   CONTAINER.insertAdjacentHTML('afterend', '<section id="content-2" class="content"></section>');
//   var newContent = document.getElementById("content-2");
//   new Sortable(newContent, {
//     group: 'content',
//     animation: 150
//   });
// }

new Sortable(CONTAINER, {
  group: 'content',
  animation: 150,
  draggable: 'column',
  ghostClass: 'dragging',
  swapThreshold: 0.65
  // onEnd: function (evt) {
  //   document.querySelector('.sortable-focused').classList.remove('sortable-focused')
  // },
  // onMove: function (evt) {

  //   if (evt.related != evt.from) {
  //     evt.related.classList.add('sortable-focused')

  //   } else {
  //     evt.related.classList.remove('sortable-focused')
  //   }
  // }
});



// var gridAdd = document.querySelectorAll('.grid-add')
// for (var i = 0; i < gridAdd.length; i++) {
// 	new Sortable(gridAdd[i], {
// 		group: 'content',
// 		animation: 150,
// 		fallbackOnBody: true,
// 		swapThreshold: 0.65
// 	});
// }



// new Sortable(GRID_DROPZONE, {
//   group: 'content',
//   animation: 150,
//   onAdd: function (evt) {
//     GRID_DROPZONE.classList.add('has-element');
//   },
//   onMove: function (evt) {
//     if (GRID_DROPZONE.getElementsByClassName('element').length == 1) {
//       GRID_DROPZONE.classList.remove('has-element')
//     }
//   }
// });
