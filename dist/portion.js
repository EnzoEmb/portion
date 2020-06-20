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

  // si el row tiene mas de una columna, ponemos un elemento dentro de esta columna
  if (e.target.parentElement.parentElement.parentElement.querySelectorAll('.column').length != 1) {
    createElement(e);
    return;
  }

  // añadimos nuevo empty row
  var PARENT = e.target.parentElement.parentElement.parentElement;

  // añadimos nuevo row
  PARENT.insertAdjacentHTML('afterend', '<div class="row"><div class="column"><div class="element"><div class="element-content" contenteditable="true"></div></div></div></div>');
  PARENT.nextSibling.getElementsByClassName('element-content')[0].focus()

  // iniciamos la columna
  initColumn(PARENT.nextSibling.querySelector('.column'))

  // iniciamos el row
  initRow(PARENT.nextSibling)

}


function createElement(e) {
  e.target.parentElement.insertAdjacentHTML('afterend', '<div class="element"><div class="element-content" contenteditable="true"></div></div>');
  e.target.parentElement.nextSibling.focus();
}


function initColumn(element) {
  new Sortable(element, {
    group: 'content',
    animation: 150,
    draggable: '.element',
    onRemove(e) {
      // si la columna no tiene elementos, la eliminamos
      if (e.from.childNodes.length === 0) {
        // si la row no tiene elementos la eliminamos
        if (e.from.parentElement.querySelectorAll('.element').length == 0) {
          e.from.parentElement.remove();
        } else {
          e.from.remove();
        }
      }


    }
  });
}

function initRow(element) {
  new Sortable(element, {
    group: 'content',
    animation: 150,
    draggable: '.element',
    onAdd(e) {
      //añadimos columna y ponemos el elemento
      wrapperCol = document.createElement('div');
      wrapperCol.classList.add('column')
      e.target.appendChild(wrapperCol);
      wrapperCol.appendChild(e.item)

      initColumn(wrapperCol)

    },
    onRemove(e) {
      console.log(e);
    }
  });
}



// iniciamos los elementos default
function init() {

  // iniciamos la primer columna
  initColumn(document.querySelector('.column'))

  // iniciamos el primer row
  initRow(document.querySelector('.row'))

  // hacemos foco en el primer input
  document.querySelector('.element-content').focus();
}

init();