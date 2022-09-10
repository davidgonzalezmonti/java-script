const arrayDeStickers = [];

const mugiwara = { nombre: "Mugiwara", tamaño: "10x10", precio: 200 };
const luffy = { nombre: "Luffy", tamaño: "8x8", precio: 150 };
const zoro = { nombre: "Zoro", tamaño: "8x8", precio: 150 };
const goku = { nombre: "Goku", tamaño: "8x8", precio: 150 };
const vegeta = { nombre: "Vegeta", tamaño: "6x6", precio: 120 };
const kidBuu = { nombre: "Kid Buu", tamaño: "6x6", precio: 120 };
const tanjiro = { nombre: "Tanjiro", tamaño: "8x8", precio: 150 };
const inosuke = { nombre: "Inosuke", tamaño: "6x6", precio: 120 };
const zenitsu = { nombre: "Zenitsu", tamaño: "6x6", precio: 120 };

const THIRTY = 30;
const TWENTY = 20;
const FIFTEEN = 15;

const formasPago = [{cuotas: 12, interes: THIRTY}, {cuotas: 6, interes: TWENTY}, {cuotas: 3, interes: FIFTEEN}, { cuotas: 1, interes: 1}];


const cuotas = (total, interes) => {
    var porcentaje = interes / 100;
            var interes = total * porcentaje;
            var precioTotal = total + interes;
            return {total: precioTotal, interes: interes};
}


function precioFinal(cant, interes) {
    let contenedor = document.querySelector("#contenedor")
    const total = arrayDeStickers.reduce ((articulo, precios) => articulo + precios.precio, 0);
    const resultado = document.createElement("div")
        carritoDom();
    resultado.className = "precioFinal"

    if(cant > 1){
        resultado.innerHTML = `<h3>Total a pagar con ${cant} cuotas: $ ${cuotas(total, interes).total}</h3>
                               <p>En ${cant} cuotas de $ ${cuotas(total, interes).total / cant} con un interes de $ ${cuotas(total, interes).interes}</p> 
                               <h5>¡Gracias por tu compra!</h5>`
    contenedor.append(resultado)
    } else {
            resultado.innerHTML = `<h3>Total a pagar: $ ${total}</h3>
                                    <h5>¡Gracias por tu compra!</h5>`
            contenedor.append(resultado)
        }
    
}

function carritoDom () {
    const stickersDom = document.querySelector(".stickers")
    arrayDeStickers.forEach(x => { 
        const item = document.createElement("div");
        item.innerHTML = `<h2>${x.nombre}</h2>
                          <ul>
                          <li>Tamaño: ${x.tamaño}</li>
                          <li>Precio: ${x.precio}</li>
                          </ul> `
        stickersDom.appendChild(item);
    });
}


const mensajeDetelleCompra = () => {
    const detallesCompra = document.querySelector(".detallesCompra")
    const titulo = document.createElement("div");
                titulo.innerHTML = `DETALLES DE SU COMPRA`
                detallesCompra.append(titulo);
}

function menuCuotas() {
    do {
        valor = Number (prompt("En cuantas cuotas lo queres pagar? \n 12 cuotas con recargo del 30% \n 6 cuotas con recargo del 20% \n 3 cuotas con recargo del 10% \n 1 cuota sin interes \n 0. Salir sin comprar"));
        switch (valor) {
            case 12:
                mensajeDetelleCompra();
                precioFinal(12, THIRTY);
                break;
            case 6:
                mensajeDetelleCompra();
                precioFinal(6, TWENTY);
                break;
            case 3:
                mensajeDetelleCompra();
                precioFinal(3, FIFTEEN);
                break;
            case 1:
                mensajeDetelleCompra();
                precioFinal(1, 1);
                break;
            case 0:
                const resultado = document.createElement("div")
                resultado.innerHTML = `GRACIAS POR SU VISITA`
                resultado.className = "msjSalirSinComprar"
                contenedor.append(resultado);
                break;
        
            default:
                console.log("Seleccione una opcion correcta");
                break;
        }
    } while (valor === null || (valor !== 0 && valor !== 12 && valor !== 6 && valor !== 3 && valor !== 1));
}


function compraStickers () {
    do {
        opcion = Number (prompt("SELECCIONE SUS STICKERS:\n 10. Logo Mugiwara \n 9. Luffy \n 8. Zoro \n 7. Goku \n 6. Vegeta \n 5. Kid Buu \n 4. Tanjiro \n 3. Inosuke \n 2. Zenitsu \n 1. FINALIZAR"));
        switch (opcion) {
            case 10:
                arrayDeStickers.push(mugiwara);              
                break
            case 9:
                arrayDeStickers.push(luffy);
                break
    
            case 8:
                arrayDeStickers.push(zoro);
                break
            
                case 7:
                arrayDeStickers.push(goku);
                break
    
                case 6:
                arrayDeStickers.push(vegeta);
                break
    
                case 5:
                arrayDeStickers.push(kidBuu);
                break
    
                case 4:
                arrayDeStickers.push(tanjiro);
                break
    
                case 3:
                arrayDeStickers.push(inosuke);
                break
            
                case 2:
                arrayDeStickers.push(zenitsu);
                break
            
                case 1:
                break;
                
            default:
                alert("Seleccione una opcion correcta");
                break;
        }
    } while (opcion !== 1 || opcion === null);
    }


compraStickers();
menuCuotas();