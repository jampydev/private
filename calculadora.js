



// Selecciona todos los botones y la pantalla
const botones = document.querySelectorAll('.btn');
const pantalla = document.querySelector('.pantalla');



// Agrega un evento de click a cada botón
botones.forEach(boton => {

  boton.addEventListener('click', (event) => {


    // Si el botón es el igual, evalúa la expresión en la pantalla
    if (event.target.id === 'igual') {

      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch (error) {
        pantalla.textContent = 'Error404xD';
      }

    } else if (event.target.textContent === 'C') {

      // Si el botón es 'C', limpia la pantalla
      pantalla.textContent = '';
    } else if (event.target.textContent === '←') {

      // Si el botón es '←', borra el último carácter en la pantalla
      pantalla.textContent = pantalla.textContent.slice(0, -1);
    } else {

      // Si no, agrega el contenido del botón a la pantalla
      pantalla.textContent += event.target.textContent;

    }
  });
});


 
 
