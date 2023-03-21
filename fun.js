let valor_anterior_display = document.querySelector("#valor-anterior");
let valor_actual_display = document.querySelector("#valor-actual");
let boton_numero = document.querySelectorAll(".numero");
let boton_operador = document.querySelectorAll(".operador");

const display = new Display(valor_anterior_display, valor_actual_display);

boton_numero.forEach(boton => {
    boton.addEventListener('click', () =>  display.agregar_numero(boton.innerHTML))
})

boton_operador.forEach(boton =>{
    boton.addEventListener('click', () => display.calculando(boton.value))
})