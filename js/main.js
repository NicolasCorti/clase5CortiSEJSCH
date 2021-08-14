let productoElegido;
let cantidadElegida;
let consultaProducto = 1;
let carrito = [];
let neto = 0;
let total = 0;

const iva = 1.21;

function Producto (nombre, precio, cantidad, id){
    this.nombre = nombre,
    this.precio = precio,
    this.cantidad = cantidad
    this.id = id
}

let producto1 = new Producto('Remera tema cucurucho', 500, 0, 'uno');
let producto2 = new Producto('Remera tema sunday', 500, 0, 'dos');
let producto3 = new Producto('Remera tema palito', 500, 0, 'tres');
let producto4 = new Producto('Remera tema helado', 500, 0, 'cuatro');
let producto5 = new Producto('Calendario de helado', 70, 0, 'cinco');
let producto6 = new Producto('Poster de helado', 200, 0, 'seis');

/*------------------------------ Creación de HTML desde JS ------------------------------*/
let contenedor = document.getElementById('productos');
const productos = [ {nombre: producto1.nombre, precio: producto1.precio},
                    {nombre: producto2.nombre, precio: producto2.precio},
                    {nombre: producto3.nombre, precio: producto3.precio},
                    {nombre: producto4.nombre, precio: producto4.precio},
                    {nombre: producto5.nombre, precio: producto5.precio},
                    {nombre: producto6.nombre, precio: producto6.precio}];

for(const producto of productos){
    let cartaDeProducto = document.createElement('article');
    cartaDeProducto.innerHTML = `   <h5>${producto.nombre}</h5>
                                    <p>$ ${producto.precio} + IVA</p>
                                    <input id="${producto.id}" type="submit" value="comprar">`;
    contenedor.appendChild(cartaDeProducto);
}
/*------------------------------ Creación de HTML desde JS ------------------------------*/

let compraUno = document.getElementById('uno');
let compraDos = document.getElementById('dos');
let compraTres = document.getElementById('tres');
let compraCuatro = document.getElementById('cuatro');
let compraCinco = document.getElementById('cinco');
let compraSeis = document.getElementById('seis');

compraUno.onclick = () => {console.log('Compra realizada')};
compraDos.onclick = () => {console.log('Compra realizada')};
compraTres.onclick = () => {console.log('Compra realizada')};
compraCuatro.onclick = () => {console.log('Compra realizada')};
compraCinco.onclick = () => {console.log('Compra realizada')};
compraSeis.onclick = () => {console.log('Compra realizada')};

/*alert('Bienvenid@ al sistema de compras. A continuación podrá ver los productos que tenemos para ofrecerle. Presione aceptar para continuar.');

while(consultaProducto){
    alert(  'Producto 1:               ' + producto1.nombre + '               $' + producto1.precio + ' + IVA. ' +
            'Producto 2:               ' + producto2.nombre + '                    $' + producto2.precio + ' + IVA. ' +
            'Producto 3:               ' + producto3.nombre + '                      $' + producto3.precio + ' + IVA. ' +
            'Producto 4:               ' + producto4.nombre + '                    $' + producto4.precio + ' + IVA. ' +
            'Producto 5:               ' + producto5.nombre + '                     $' + producto5.precio + ' + IVA. ' +
            'Producto 6:               ' + producto6.nombre + '                          $' + producto6.precio + ' + IVA.');

    productoElegido = prompt ('Ingrese el número de producto que desea comprar.');

    switch(productoElegido){
        case "1":
            alert('El producto elegido es ' + producto1.nombre)
            producto1.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto1)
            break;
        case "2":
            alert('El producto elegido es ' + producto2.nombre)
            producto2.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto2)
            break;
        case "3":
            alert('El producto elegido es ' + producto3.nombre)
            producto3.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto3)
            break;
        case "4":
            alert('El producto elegido es ' + producto4.nombre)
            producto4.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto4)
            break;
        case "5":
            alert('El producto elegido es ' + producto5.nombre)
            producto5.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto5)
            break;
        case "6":
            alert('El producto elegido es ' + producto6.nombre)
            producto6.cantidad = prompt ('Ingrese la cantidad que desea comprar.')
            carrito.push(producto6)
            break;
        default:
            alert("El número ingresado no es válido");
            break;
    }

    let caracter = prompt ('¿Desea comprar otro producto? (Ingrese "1" para ingresar otro o "0" para terminar)');

    if(caracter == 0){
        carrito.forEach(producto => {
            neto += (producto.precio * producto.cantidad);
        });

        total = neto * iva;

        alert(  '                                   El monto de la compra es:                                        ' +
                'Precio neto: $ ' + neto + 'Precio final: $ ' + total);
        consultaProducto=0;
    }else if(caracter != 1){
        alert("La opción ingresada no es válida");
    }
}*/