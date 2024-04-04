function cargarMatrices() {
    const filas1 = parseInt(document.getElementById('filas1').value);
    const columnas1 = parseInt(document.getElementById('columnas1').value);
    const filas2 = parseInt(document.getElementById('filas2').value);
    const columnas2 = parseInt(document.getElementById('columnas2').value);

    if (isNaN(filas1) || isNaN(columnas1) || isNaN(filas2) || isNaN(columnas2)) {
        alert('Ingrese valores numéricos para las filas y columnas de las matrices.');
        return;
    }

    let html = '';
    html += '<h3>Matriz 1:</h3>';
    for (let i = 0; i < filas1; i++) {
        for (let j = 0; j < columnas1; j++) {
            html += `<input type="number" id="matriz1_${i}_${j}">`;
        }
        html += '<br>';
    }

    html += '<h3>Matriz 2:</h3>';
    for (let i = 0; i < filas2; i++) {
        for (let j = 0; j < columnas2; j++) {
            html += `<input type="number" id="matriz2_${i}_${j}">`;
        }
        html += '<br>';
    }

    document.getElementById('matricesInput').innerHTML = html;
}

function multiplicarMatrices() {
    // Obtener valores de las matrices
    const filas1 = parseInt(document.getElementById('filas1').value);
    const columnas1 = parseInt(document.getElementById('columnas1').value);
    const filas2 = parseInt(document.getElementById('filas2').value);
    const columnas2 = parseInt(document.getElementById('columnas2').value);

    let matriz1 = [];
    let matriz2 = [];

    for (let i = 0; i < filas1; i++) {
        matriz1[i] = [];
        for (let j = 0; j < columnas1; j++) {
            matriz1[i][j] = parseInt(document.getElementById(`matriz1_${i}_${j}`).value);
        }
    }

    for (let i = 0; i < filas2; i++) {
        matriz2[i] = [];
        for (let j = 0; j < columnas2; j++) {
            matriz2[i][j] = parseInt(document.getElementById(`matriz2_${i}_${j}`).value);
        }
    }

    // Multiplicar las matrices
    if (columnas1 !== filas2) {
        alert('El número de columnas de la Matriz 1 debe ser igual al número de filas de la Matriz 2 para poder multiplicarlas.');
        return;
    }

    let resultado = [];
    for (let i = 0; i < filas1; i++) {
        resultado[i] = [];
        for (let j = 0; j < columnas2; j++) {
            let sum = 0;
            for (let k = 0; k < columnas1; k++) {
                sum += matriz1[i][k] * matriz2[k][j];
            }
            resultado[i][j] = sum;
        }
    }

    // Mostrar el resultado
    let htmlResultado = '<h3>Matriz Resultante:</h3>';
    for (let i = 0; i < resultado.length; i++) {
        for (let j = 0; j < resultado[i].length; j++) {
            htmlResultado += resultado[i][j] + ' ';
        }
        htmlResultado += '<br>';
    }

    document.getElementById('resultado').innerHTML = htmlResultado;
}
