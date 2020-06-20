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

  // añadimos nuevo row
  PARENT.insertAdjacentHTML('afterend', '<div class="row"><div class="column"><div class="element"><div class="element-content" contenteditable="true"></div></div></div></div>');
  PARENT.nextSibling.getElementsByClassName('element-content')[0].focus()

  // iniciamos nuevo row
  new Sortable(PARENT.nextSibling.querySelector('.column'), {
    group: 'content',
    animation: 150,
    draggable: '.element',
    ghostClass: 'dragging',
  });


  // row
  new Sortable(PARENT.nextSibling, {
    group: 'content',
    animation: 150,
    draggable: '.element',
    ghostClass: 'dragging',
    onAdd(e) {
      //añadimos columna y ponemos el elemenot
      wrapperCol = document.createElement('div');
      wrapperCol.classList.add('column')
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



// init first row
new Sortable(document.getElementsByClassName('row')[0], {
  group: 'content',
  animation: 150,
  draggable: '.element',
  ghostClass: 'dragging',
  onAdd(e) {
    //añadimos columna y ponemos el elemento
    wrapperCol = document.createElement('div');
    wrapperCol.classList.add('column')
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






document.getElementById('test').addEventListener('click', function () {
  document.body.classList.toggle('test')
})