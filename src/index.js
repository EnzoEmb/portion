const CONTAINER = document.getElementById("content")
const ELEMENT = document.querySelector(".element")



// cuando presiona un boton en el elemento con foco
document.activeElement.addEventListener("keypress", function (e) {
  // si el boton es enter
  if (e.keyCode == 13) {
    // añadimos nuevo parrafo
    // createElement();
    CONTAINER.insertAdjacentHTML('beforeend', '<div class="element" draggable="true"><div class="element-content" contenteditable="true"></div></div>');
    // document.querySelector('.element:last-child').focus();
    setTimeout(function(){
      
    CONTAINER.lastChild.focus()
    }, 100)
    // e.target.insertAdjacentHTML('afterend', '<div class="element" contenteditable="true"></div>');
    // setTimeout(function(){CONTAINER.lastChild.focus()}, 500);

  }


});


function createElement() {
  // añadimos nuevo parrafo
  
  // CONTAINER.insertAdjacentHTML('beforeend', '<div class="element" contenteditable="true"></div>');
  // document.querySelector('.element:last-child').focus();
  // CONTAINER.lastChild.focus()

  var p = document.createElement("div").setAttribute('contenteditable', 'true');
  CONTAINER.append(p);
  // CONTAINER.lastChild.focus()

}