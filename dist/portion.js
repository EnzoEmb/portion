const BASE = document.getElementById("base")
const CONTAINER = document.getElementById("content")
const MAX_GRIDS = 5;
const TEMPLATE_ELEMENT = `<div class="element"><div class="element-content" contenteditable="true"></div></div>`;
const TEMPLATE_ROW = `<div class="row"><div class="column">` + TEMPLATE_ELEMENT + `</div></div>`;



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
  PARENT.insertAdjacentHTML('afterend', TEMPLATE_ROW);
  PARENT.nextSibling.getElementsByClassName('element-content')[0].focus()

  // iniciamos la columna
  initColumn(PARENT.nextSibling.querySelector('.column'))

  // iniciamos el row
  initRow(PARENT.nextSibling)

}


function createElement(e) {
  console.log(e);
  e.target.parentElement.insertAdjacentHTML('afterend', TEMPLATE_ELEMENT);
  e.target.parentElement.nextSibling.getElementsByClassName('element-content')[0].focus();
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