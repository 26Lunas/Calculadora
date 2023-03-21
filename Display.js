class Display {
    constructor(valor_anterior_display, valor_actual_display){
        this.valor_anterior_display = valor_anterior_display;
        this.valor_actual_display = valor_actual_display;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '%',
            multiplicar: 'X'
        }
    }

    eliminar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.mostrarValores();
    }

    eliminarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.mostrarValores();
    }

    calculando(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.mostrarValores();
    }

    agregar_numero(numero){
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual =  this.valorActual.toString() + numero.toString();
        this.mostrarValores();
    }
    mostrarValores(){
        this.valor_actual_display.textContent = this.valorActual;
        this.valor_anterior_display.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || '' }`;
    }

    calcular(){
        let valorAnterior = parseFloat(this.valorAnterior);
        let valorActual = parseFloat(this.valorActual);
        if (isNaN(valorAnterior) || isNaN(valorActual)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}