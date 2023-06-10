const valorTicket = 200;
let totalPagar = document.getElementById('totalPago');
let cantidadTickets = document.getElementById('cantidadTickets');
let categoria = document.getElementById('categoriaSelect');
let borrar = document.getElementById('btnBorrar');
let resumen = document.getElementById('btnResumen');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let mail = document.getElementById('mail');

categoria.addEventListener('change', calculoDescuentoPorCategoria);
cantidadTickets.addEventListener('change', calculoDescuentoPorCategoria);
borrar.addEventListener('click', reset);
resumen.addEventListener('click', comprobante);

function calculoDescuentoPorCategoria(){
let categoriaSelected = categoria.options[categoria.selectedIndex].text;
let ticketDescuento = 0;
switch(categoriaSelected){
    case "Estudiante":
        ticketDescuento = valorTicket - (valorTicket * 0.8);
        break;
    case "Trainee":
        ticketDescuento = valorTicket- (valorTicket * 0.5);
        break;
    case "Junior":
        ticketDescuento = valorTicket- (valorTicket * 0.15);
        break;
    case "Sin Categoria":
        ticketDescuento = valorTicket;
    default:
        break;
}
    totalPagar.innerText = ticketDescuento * cantidadTickets.value
}

function reset(){
    totalPagar.innerHTML = 0;
}

function comprobante ( ){
    console.log(nombre.value, apellido.value);
    alert (`
    Nombre: ${nombre.value} ${apellido.value}. \n
    Cantidad de tickets: ${cantidadTickets.value}. \n

    Total: ${totalPagar.innerText}` )
}