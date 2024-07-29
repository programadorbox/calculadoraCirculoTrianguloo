function calcularHipotenusa() {
    // Obtiene los valores de los catetos
    const catetoA = parseFloat(document.getElementById('catetoA').value);
    const catetoB = parseFloat(document.getElementById('catetoB').value);   


    // Calcula la hipotenusa usando el teorema de Pitágoras
    const hipotenusa = Math.sqrt(catetoA * catetoA + catetoB * catetoB);

    // Muestra el resultado
    const resultadoHipotenusa = document.getElementById('resultadoHipotenusa');
    resultadoHipotenusa.textContent = `La hipotenusa es: ${hipotenusa.toFixed(2)}`;

    // Elimina cualquier botón "Copiar" existente para la hipotenusa
    const botonesCopiarHipotenusa = document.querySelectorAll('#resultadoHipotenusa button');
    botonesCopiarHipotenusa.forEach(boton => boton.remove());

    // Crea un nuevo botón "Copiar" para la hipotenusa
    const botonCopiarHipotenusa = document.createElement('button');
    botonCopiarHipotenusa.textContent = 'Copiar';
    resultadoHipotenusa.appendChild(botonCopiarHipotenusa);

    // Agrega el evento de clic al botón
    botonCopiarHipotenusa.addEventListener('click', () => {
        const textoConNumero = resultadoHipotenusa.textContent;
        const numero = textoConNumero.match(/\d+(\.\d+)?/)[0];
        navigator.clipboard.writeText(numero)
            .then(() => console.log('Número copiado al portapapeles'))
            .catch(err => console.error('Error al copiar:', err));
    });
}

// Función para calcular
function calcular() {
    // Calcula el área del círculo (código existente)
    // Calcula la hipotenusa (código anterior)
}