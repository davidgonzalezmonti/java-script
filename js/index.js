const arrayDeStickers = [];

const mugiwara = { nombre: "Luffy", tamaño: "10x10", precio: 200 };
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

const formasPago = [{
    cuotas:   12,
    interes: THIRTY
},
{
    cuotas:   6,
    interes: TWENTY
},
{
    cuotas:   3,
    interes: FIFTEEN
},
{
    cuotas:   1,
    interes: 1
}
];


function compraStickers () {
do {
    opcion = Number (prompt("SELECCIONE SUS STICKERS: \n 10. Logo Mugiwara \n 9. Luffy \n 8. Zoro \n 7. Goku \n 6. Vegeta \n 5. Kid Buu \n 4. Tanjiro \n 3. Inosuke \n 2. Zenitsu \n 1. IR AL CARRITO \n 0. SALIR"));
    switch (opcion) {
        case 10:
            arrayDeStickers.push(mugiwara);
                alert("Mugiwara se añado al carrito")
            break
        case 9:
            arrayDeStickers.push(luffy);
            alert("Luffy se añado al carrito")

            break

        case 8:
            arrayDeStickers.push(zoro);
            alert("Zoro se añado al carrito")

            break
        
            case 7:
            arrayDeStickers.push(goku);
            alert("Goku se añado al carrito")

            break

            case 6:
            arrayDeStickers.push(vegeta);
            alert("Vegeta se añado al carrito")

            break

            case 5:
            arrayDeStickers.push(kidBuu);
            alert("Kid Buu se añado al carrito")

            break

            case 4:
            arrayDeStickers.push(tanjiro);
            alert("Tanjiro se añado al carrito")

            break

            case 3:
            arrayDeStickers.push(inosuke);
            alert("Inosuke se añado al carrito")

            break
        
            case 2:
            arrayDeStickers.push(zenitsu);
            alert("Zenitsu se añado al carrito")

            break
        
            case 1:
            menuCarrito();
            break
            
        case 0:
            break
        default:
            alert("Seleccione una opcion correcta");
            break;
    }
} while (opcion !== 0 || opcion === null);
}

const cuotas = (total, interes) => {
    var porcentaje = interes / 100;
            var interes = total * porcentaje;
            var precioTotal = total + interes;
            return {total: precioTotal, interes: interes};
}

function calculoCuotas () {
    total = arrayDeStickers.reduce ((articulo, precios) => articulo + precios.precio, 0);
                console.log("Total a pagar sin interes: $" + total);
                formasPago.forEach(x => {
                    console.log("Total con " + x.cuotas + " cuotas: $" + cuotas(total, x.interes).total);
                    console.log("En " + x.cuotas + " cuotas de $" + cuotas(total, x.interes).total / x.cuotas + " con un interes de $" + cuotas(total, x.interes).interes);
                });
}

function precioFinal(cant, interes) {
    console.log("DETALLE DE SU COMPRA: \n");
    console.table(arrayDeStickers);
    const total = arrayDeStickers.reduce ((articulo, precios) => articulo + precios.precio, 0);
    if(cant > 1) {
        console.log("Total a pagar con " + cant + " cuotas: $" + cuotas(total, interes).total);
        console.log("En " + cant + " cuotas de $" + cuotas(total, interes).total / cant + " con un interes de $" + cuotas(total, interes).interes);
    } else {
        console.log("Total a pagar: $" + total);
    }
    alert("Gracias por su compra ❤️".toUpperCase());  
}



function eliminarCarrito () { 
    console.clear();
    console.table(arrayDeStickers);
    index = Number(prompt("Que producto desea eliminar?"));
    arrayDeStickers.splice(index, 1);
    alert("Producto eliminado")
    console.clear();
    console.table(arrayDeStickers);
    
}

function menuCuotas() {
    do {
        valor = Number (prompt("En cuantas cuotas lo queres pagar? \n 12 cuotas con recargo del 30% \n 6 cuotas con recargo del 20% \n 3 cuotas con recargo del 10% \n 1 cuota sin interes \n 0. Salir sin comprar"));
        switch (valor) {
            case 12:
                precioFinal(12, THIRTY);
                break;
            case 6:
                precioFinal(6, TWENTY);
                break;
            case 3:
                precioFinal(3, FIFTEEN);
                break;
            case 1:
                precioFinal(1, 1);
                break;
            case 0:
                console.log("Gracias por su visita");
                break;
        
            default:
                console.log("Seleccione una opcion correcta");
                break;
        }
    } while (valor === null || (valor !== 0 && valor !== 12 && valor !== 6 && valor !== 3 && valor !== 1));
}

function menuCarrito() {
    do {  
        opcion = Number(prompt("Seleccione una opcion: \n 1. Visualizar carrito \n 2. Eliminar del carrito \n 3. Calcular cuotas \n 4. Volver a comprar \n 0. Finalizar y pagar"));
        switch (opcion) {
            case 1:
                console.clear();
        console.log("DETALLES DE SU CARRITO: \n");
                console.table(arrayDeStickers);
                break;
            case 2:
                eliminarCarrito();
                break;
            case 3:
                console.clear();
                calculoCuotas ();
                break;
            case 4:
                compraStickers();
                break;
            case 0:
                console.clear();
                menuCuotas()
                break;
            default:
                alert("Seleccione una opcion correcta");
                break;
        }
    } while (opcion !== 0 || opcion === null)
}

alert("Bienvenido a Anime Stickers \n Seleccione sus stcikers:")
console.log(mugiwara, luffy, zoro, goku, vegeta, kidBuu, tanjiro, inosuke, zenitsu);


compraStickers();