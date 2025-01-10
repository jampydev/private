







const contraseñaCorrecta = "jmp";
let intentos = 0;
const intentosMaximos = 5;

const formulario = document.getElementById("password-form");
const inputContraseña = document.getElementById("password");
const mensajeError = document.getElementById("error-message");
const modal = document.getElementById("modal");
const modalCargando = document.getElementById("loading-modal");



formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar recarga del formulario


  const contraseñaIngresada = inputContraseña.value;



  // Eliminar y volver a agregar la clase 'error' para reiniciar la animación
  mensajeError.classList.remove('error');
  void mensajeError.offsetWidth;  // Forzar reflujo
  mensajeError.classList.add('error'); // Volver a aplicar la clase para iniciar la animación



  if (!contraseñaIngresada) {
    mensajeError.textContent = "Por favor, completa este campo.";
    return;
  }


  if (contraseñaIngresada === contraseñaCorrecta) {
    modalCargando.style.display = "flex";
    setTimeout(() => {
      modalCargando.style.display = "none";
      window.location.href = "calculadora.html"; // Tu URL.
    }, 4000); // Simula un tiempo de carga de 4 segundos
  
  
  } else {


    intentos++;
    if (intentos >= intentosMaximos) {
      modal.style.display = "flex";
    } else {
      mensajeError.textContent = `Contraseña incorrecta. Intento ${intentos} de ${intentosMaximos}.`;
    }
  }
});

