let numero1 = null;
let numero2 = null;
let operacion = null;

function verdisplay(valor) {
    const display = document.getElementById('display');
    if (operacion) {
        if (numero2 === null) {
            display.value = ''; 
        }
        display.value += valor;
        numero2 = parseFloat(display.value); 
    } else {
        display.value += valor; 
        numero1 = parseFloat(display.value); 
    }
}

function operador(operar) {
    const display = document.getElementById('display');

    if (numero1 !== null) {
        operacion = operar;
        display.value = '';
    }
}

function deldisplay() {
    const display = document.getElementById('display');
    display.value = '';
    numero1 = null;
    numero2 = null;
    operacion = null;
}

function limpiar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculo() {
    const display = document.getElementById('display');
    let resultado = 0;
    if (operacion && numero1 !== null && numero2 !== null) {
        switch (operacion) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':
                if (numero2 === 0) {
                    display.value = 'Error'; 
                    return; 
                } else {
                    resultado = numero1 / numero2;
                }
                break;
        }
        display.value = resultado; 
        numero1 = resultado;
        operacion = null;
        numero2 = null;
    }
}


    
