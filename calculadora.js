const readline = require('readline');

// Crear una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funciones para operaciones básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

// Función para realizar la operación seleccionada
function calculadora(opcion, num1, num2) {
    switch (opcion) {
        case '+':
            return sumar(num1, num2);
        case '-':
            return restar(num1, num2);
        case '*':
            return multiplicar(num1, num2);
        case '/':
            return dividir(num1, num2);
        default:
            return "Operación no válida";
    }
}

// Solicitar entrada del usuario
rl.question("Ingrese la operación (+, -, *, /): ", (opcion) => {
    rl.question("Ingrese el primer número: ", (input1) => {
        const num1 = parseFloat(input1);
        rl.question("Ingrese el segundo número: ", (input2) => {
            const num2 = parseFloat(input2);
            const resultado = calculadora(opcion, num1, num2);
            console.log(`Resultado: ${resultado}`);
            rl.close();
        });
    });
});
