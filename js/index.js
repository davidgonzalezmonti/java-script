const clickAgregarAlCarrito = document.querySelectorAll(".btn")
const carritoDom = document.querySelector(".tbody")
const table = document.querySelector(".table")

let carrito = []

clickAgregarAlCarrito.forEach(btn => {
btn.addEventListener("click", agregarAlCarrito)
})


function agregarAlCarrito(e) {
    
  const button = e.target
    const sticker = button.closest (".card")
    const stickerTitulo = sticker.querySelector(".card-title").textContent;
const stickerPrecio = sticker.querySelector(".precio").textContent;
const stickerTamaño = sticker.querySelector(".tamaño").textContent;

const nuevoSticker = {
titulo: stickerTitulo,
tamaño: stickerTamaño,
precio: stickerPrecio,
cantidad: 1
}

stickerCarrito(nuevoSticker)

}

function stickerCarrito(nuevoSticker) {

    carrito.push(nuevoSticker)
    llenarCarrito()
    totalCarrito()
}


function llenarCarrito () {
  carritoDom.innerHTML = ""
  carrito.map(item => {
    
        const tr = document.createElement("tr")
        tr.classList.add("stickerEnTabla")
        tr.innerHTML = `  
        
        <th scope="row">ID</th>
          <td class="productoTabla">${item.titulo}</td>
          <td class="tamañoTabla">${item.tamaño}</td>
          <td class="cantidadTabla">1</td>
          <td class="precioTabla">${item.precio}</td>
          
        `

        carritoDom.append(tr);
    })
    totalTabla()
    
}


function totalTabla() {
  const tbody = document.querySelector(".tbody")
  const tr = document.createElement("tr")
  tr.innerHTML = `
  <tbody><tr>
  <td colspan="3"></td>
          <td>TOTAL</td>
          <td class="precioFinal">$</td>
          </tr></tbody>
  `
  tbody.append(tr)
  
}

function totalCarrito(){
    
    let Total = 0;
    const precioFinal = document.querySelector('.precioFinal')
    carrito.forEach((item) => {
      const precio = Number(item.precio.replace("$", ''))
      Total = Total + precio*item.cantidad
      precioFinal.innerHTML = `$${Total}`
    })
}

function tabla() {
    const thead = document.createElement("thead")
    thead.innerHTML = `
    
    <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Tamaño</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
          </tr>
    `
    table.append(thead)

}

tabla();
