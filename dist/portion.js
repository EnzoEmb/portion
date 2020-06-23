


var heading_1 = {
  name: "Heading 1",
  icon: "dist/img/heading.svg",
  slug: "heading-1",
  convertTo: function () {
    alert('test');
  }
}

var heading_2 = {
  name: "Heading 2",
  icon: "dist/img/heading.svg",
  slug: "heading-2",
  convertTo: function () {
    alert('test');
  }
}

var heading_3 = {
  name: "Heading 3",
  icon: "dist/img/heading.svg",
  slug: "heading-3",
  convertTo: function () {
    alert('test');
  }
}

var text = {
  name: "Texto",
  icon: "dist/img/heading.svg",
  slug: "p",
  convertTo: function () {
    alert('test');
  }
}





var ELEMENTS = [heading_1, heading_2, heading_3, text];
var ELEMENTS_ITEMS = "";
for (let i = 0; i < ELEMENTS.length; i++) {
  ELEMENTS_ITEMS += '<div class="popup-item" data-element="' + ELEMENTS[i].slug + '"><div class="popup-item--icon"><img src="' + ELEMENTS[i].icon + '"></div>' + ELEMENTS[i].name + '</div>';
}

const TEMPLATE_ELEMENT_POPUP = `
<div class="element-popup">
`+ ELEMENTS_ITEMS + `

</div>
`;







const BASE = document.getElementById("base")
const CONTAINER = document.getElementById("content")
const MAX_GRIDS = 5;
// const TEMPLATE_ELEMENT_POPUP = `
// <div class="element-popup">
//   <div class="popup-item heading-1"><div class="popup-item--icon"><img src="dist/img/heading.svg"></div>Heading 1</div>
//   <div class="popup-item"><div class="popup-item--icon"><img src="dist/img/heading.svg"></div>Heading 2</div>
//   <div class="popup-item"><div class="popup-item--icon"><img src="dist/img/heading.svg"></div>Heading 3</div>
//   <div class="popup-item heading-1"><div class="popup-item--icon"><img src="dist/img/heading.svg"></div>Texto</div>
// </div>
// `;
const TEMPLATE_ELEMENT = `
<div class="element" data-element="p">
  <div class="element-icon"></div>
  <div class="element-drag"></div>
  <div class="element-content" contenteditable="true"></div>
</div>`;
const TEMPLATE_ROW = `
<div class="row">
  <div class="column">` + TEMPLATE_ELEMENT + `</div>
</div>`;

var ACTIVE_ELEMENT;

CONTAINER.insertAdjacentHTML('beforeend', TEMPLATE_ELEMENT_POPUP);
var ELEMENT_POPUP = CONTAINER.querySelector('.element-popup');

// cuando presiona un boton en el elemento con foco
document.activeElement.addEventListener("keypress", function (e) {
  // si el boton es enter
  if (e.keyCode == 13) {
    // añadimos nuevo row
    createRow(e);
  }
});

// cuando hace focusout removemos la clase foco
document.activeElement.addEventListener("focusout", function (e) {
  e.target.parentElement.classList.remove('focus');
});
document.activeElement.addEventListener("focusin", function (e) {
  e.target.parentElement.classList.add('focus');
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
  PARENT.nextElementSibling.classList.add('focus')
  PARENT.nextElementSibling.getElementsByClassName('element-content')[0].focus()

  // iniciamos la columna
  initColumn(PARENT.nextElementSibling.querySelector('.column'))

  // iniciamos el row
  initRow(PARENT.nextElementSibling)

}


function createElement(e) {
  e.target.parentElement.insertAdjacentHTML('afterend', TEMPLATE_ELEMENT);
  e.target.parentElement.nextElementSibling.getElementsByClassName('element-content')[0].focus();
}


function initColumn(element) {
  new Sortable(element, {
    group: 'content',
    draggable: '.element',
    animation: 300,
    easing: "cubic-bezier(0.3, 0, 0, 1)",
    filter: ".element-icon",
    onRemove(e) {
      // si la columna no tiene elementos, la eliminamos
      if (e.from.querySelectorAll('.element').length === 0) {
        // si la row no tiene elementos la eliminamos
        if (e.from.parentElement.querySelectorAll('.element').length == 0) {
          e.from.parentElement.remove();
        } else {
          e.from.remove();
        }
      }
    },
    onChoose: function (e) {
      CONTAINER.classList.add('element-picked')
    },
    onUnchoose: function (e) {
      CONTAINER.classList.remove('element-picked')
    },
  });
}

function initRow(element) {
  new Sortable(element, {
    group: 'content',
    draggable: '.element',
    animation: 300,
    easing: "cubic-bezier(0.3, 0, 0, 1)",
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
    },
  });
}



// iniciamos los elementos default
function init() {

  // añadimos la base inicial
  document.getElementById('content').insertAdjacentHTML('beforeend', TEMPLATE_ROW);

  // iniciamos la primer columna
  initColumn(document.querySelector('.column'))

  // iniciamos el primer row
  initRow(document.querySelector('.row'))

  // hacemos foco en el primer input
  document.querySelector('.element').classList.add('focus');
  document.querySelector('.element-content').focus();
}

init();






/**
 * Elementos
 */
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('element-icon') || e.target.classList.contains('popup-item') || e.target.classList.contains('popup-item--icon')) {
    if (e.target.classList.contains('element-icon')) {

      ELEMENT_POPUP.style.left = e.pageX + 'px'
      ELEMENT_POPUP.style.top = e.pageY + 'px'
      ELEMENT_POPUP.classList.add('open');
      ACTIVE_ELEMENT = e.target.parentElement;
    }


  } else {
    ELEMENT_POPUP.classList.remove('open');
    ACTIVE_ELEMENT = null;
  }
});



var items = document.querySelectorAll('.popup-item');
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function () {
    console.log(ACTIVE_ELEMENT);
    ACTIVE_ELEMENT.setAttribute('data-element', this.getAttribute('data-element'))
  })
  
  
}


