const BASE = document.getElementById("base")
const CONTAINER = document.getElementById("content")
const MAX_GRIDS = 5;

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

  // console.log(e.target.parentElement.parentElement.parentElement.querySelectorAll('.column').length)
  if (e.target.parentElement.parentElement.parentElement.querySelectorAll('.column').length != 1) {
    createElement(e);
    return;
  }

  // añadimos nuevo empty row
  var PARENT = e.target.parentElement.parentElement.parentElement;
  // PARENT.insertAdjacentHTML('afterend', '<div class="row empty-row"></div>');

  // añadimos nuevo row
  PARENT.insertAdjacentHTML('afterend', '<div class="row"><div class="column"><div class="element"><div class="element-content" contenteditable="true"></div></div></div></div>');
  PARENT.nextSibling.getElementsByClassName('element-content')[0].focus()

  // iniciamos nuevo row
  new Sortable(PARENT.nextSibling.querySelector('.column'), {
    group: 'content',
    animation: 150,
    draggable: '.element',
    ghostClass: 'dragging',
    // onRemove(e) {
    // al mover elemento, eliminamos el row si queda vacio y su empty-row
    // if (e.from.childNodes.length === 0) {
    //   e.from.nextSibling.remove();
    //   e.from.remove();
    // }
    // }
  });


  // row
  new Sortable(PARENT.nextSibling, {
    group: 'content',
    animation: 150,
    draggable: '.element',
    ghostClass: 'dragging',
    // onRemove(e) {
    // al mover elemento, eliminamos el row si queda vacio y su empty-row
    // if (e.from.childNodes.length === 0) {
    //   e.from.nextSibling.remove();
    //   e.from.remove();
    // }
    // }
    onAdd(e) {
      // alert('added on row')
      // console.log(e);
      //añadimos columna y ponemos el elemenot
      // e.target.insertAdjacentHTML('beforeend', '<div class="column"></div>');
      wrapperCol = document.createElement('div');
      wrapperCol.classList.add('column')
      // e.target.getElementsByClassName('.column').appendChild(e.item);
      e.target.appendChild(wrapperCol);
      wrapperCol.appendChild(e.item)


      new Sortable(wrapperCol, {
        group: 'content',
        animation: 150,
        draggable: '.element',
        ghostClass: 'dragging',
      });
    


    }
  });



  // iniciamos nuevo empty row
  // new Sortable(PARENT.nextSibling.querySelector('.column'), {
  //   group: 'content',
  //   animation: 150,
  //   draggable: '.element',
  //   ghostClass: 'dragging',
  //   onAdd: function (e) {
  //     // cuando añade un nuevo elemento, lo convertimos en row y creamos otro empty ante y despues
  //     e.target.insertAdjacentHTML('beforebegin', '<div class="row empty-row"></div>');
  //     e.target.insertAdjacentHTML('afterend', '<div class="row empty-row"></div>');
  //     e.target.classList.remove('empty-row');
  //     // faltaria iniciarlos
  //   },
  // });

}

function createElement(e) {
  e.target.parentElement.insertAdjacentHTML('afterend', '<div class="element"><div class="element-content" contenteditable="true"></div></div>');
  e.target.parentElement.nextSibling.focus();
  console.log(e.target.parentElement.nextSibling.getElementsByClassName('element-content')[0].focus());

}







// iniciamos primer row
new Sortable(document.getElementsByClassName('column')[0], {
  group: 'content',
  animation: 150,
  draggable: '.element',
  ghostClass: 'dragging',
  onRemove(e) {
    // al mover elemento, eliminamos el row si queda vacio y su empty-row
    if (e.from.childNodes.length === 2) {
      e.from.remove();
    }
  }
});






// // iniciamos primero empty rows
// new Sortable(document.getElementsByClassName('row')[0], {
//   group: 'content',
//   animation: 150,
//   draggable: '.column',
//   ghostClass: 'dragging',
//   onAdd: function (e) {
//     // cuando añade un nuevo elemento, lo convertimos en row y creamos otro empty ante y despues
//     e.target.insertAdjacentHTML('beforebegin', '<div class="row empty-row"></div>');
//     e.target.insertAdjacentHTML('afterend', '<div class="row empty-row"></div>');
//     e.target.classList.remove('empty-row');
//     // faltaria iniciarlos
//   },
// });

// new Sortable(document.getElementsByClassName('row')[2], {
//   group: 'content',
//   animation: 150,
//   draggable: '.column',
//   ghostClass: 'dragging',
//   onAdd: function (e) {
//     // cuando añade un nuevo elemento, lo convertimos en row y creamos otro empty ante y despues
//     e.target.insertAdjacentHTML('beforebegin', '<div class="row empty-row"></div>');
//     e.target.insertAdjacentHTML('afterend', '<div class="row empty-row"></div>');
//     e.target.classList.remove('empty-row');
//     // faltaria iniciarlos
//   },
// });


  // init first row
  new Sortable(document.getElementsByClassName('row')[0], {
    group: 'content',
    animation: 150,
    draggable: '.element',
    ghostClass: 'dragging',
    // onRemove(e) {
    // al mover elemento, eliminamos el row si queda vacio y su empty-row
    // if (e.from.childNodes.length === 0) {
    //   e.from.nextSibling.remove();
    //   e.from.remove();
    // }
    // }
    onAdd(e) {
      // alert('added on row')
      // console.log(e);
      //añadimos columna y ponemos el elemenot
      // e.target.insertAdjacentHTML('beforeend', '<div class="column"></div>');
      wrapperCol = document.createElement('div');
      wrapperCol.classList.add('column')
      // e.target.getElementsByClassName('.column').appendChild(e.item);
      e.target.appendChild(wrapperCol);
      wrapperCol.appendChild(e.item)


      new Sortable(wrapperCol, {
        group: 'content',
        animation: 150,
        draggable: '.element',
        ghostClass: 'dragging',
      });
    


    }
  });