// Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
  const PI = 3.14159;
  const area = PI * radio * radio;
  return area;
}

// Función que se ejecuta cuando se hace clic en el botón "Calcular"
function calcular() {
  // Obtiene el valor del radio ingresado por el usuario
  const radio = parseFloat(document.getElementById('radio').value);

  // Calcula el área
  const area = calcularAreaCirculo(radio);

  // Obtiene el elemento donde se mostrará el resultado
  const resultadoElement = document.getElementById('resultado');

  // Muestra el resultado
  resultadoElement.textContent = `El área del círculo es: ${area.toFixed(16)} cm²`;

  // Elimina cualquier botón "Copiar" existente
  const botonesCopiar = document.querySelectorAll('button');
  botonesCopiar.forEach(boton => {
      if (boton.textContent === 'Copiar') {
          boton.remove();
      }
  });

  // Crea un nuevo botón "Copiar"
  const botonCopiar = document.createElement('button');
  botonCopiar.textContent = 'Copiar';

  // Agrega el botón al elemento padre del resultado
  resultadoElement.parentNode.appendChild(botonCopiar);

  // Agrega el evento de clic al botón
  botonCopiar.addEventListener('click', () => {
      // Obtiene solo el número del resultado
      const textoConNumero = resultadoElement.textContent;
      const numero = textoConNumero.match(/\d+(\.\d+)?/)[0];

      // Copia el número al portapapeles
      navigator.clipboard.writeText(numero)
          .then(() => {
              console.log('Número copiado al portapapeles');
          })
          .catch(err => {
              console.error('Error al copiar:', err);
          });
  });
}
