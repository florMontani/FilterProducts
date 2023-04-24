//variables
const contendor = document.querySelector('#contendor');
const nombre = document.querySelector('#nombre');
const marca = document.querySelector('#marca');
const talla = document.querySelector('#talla');
const color = document.querySelector('#color');
const precio = document.querySelector('#precio');
 const productoOB = {
    nombre: '',
    color: '',
    talla: '',
    marca:'',
    precio: '',

}


//listeners
document.addEventListener('DOMContentLoaded', mostrarProductos(productos));

//hago click en nombre y selecciono sudadera
nombre.addEventListener('input', e =>{
    //sudadera es el value y se lo asigno al objeto productoOB
    productoOB.nombre = e.target.value;
    console.log( e.target.value);
    console.log(productoOB);
    filtrarProducto();
});

//hago click en marca 
marca.addEventListener('input', e =>{
    //sudadera es el value y se lo asigno al objeto productoOB}
    // const {marca} = productoOB;
    // marca = e.target.value;
    // console.log( e.target.value);
    // console.log(productoOB);
    productoOB.marca = e.target.value;
    console.log(e.target.value);
    console.log(productoOB)
    filtrarProducto();
});

//hago click en talla
talla.addEventListener('input', e =>{
    productoOB.talla = e.target.value;
    console.log(e.target.value);
    console.log(productoOB);
    filtrarProducto();
});

//hago click en color
color.addEventListener('input', e=>{
    productoOB.color = e.target.value;
    filtrarProducto();
})

//hago click en precio
precio.addEventListener('input', e=>{
        productoOB.precio = e.target.value;
        console.log(e.target.value);
        console.log(productoOB);
         return filtrarProducto();
})





//functions
//limpieza
function limpiarHTML(){
    console.log("chau");
    while(contendor.firstChild){
       contendor.removeChild(contendor.firstChild);
    } 
 }




//muestra los productos 
function mostrarProductos(productos){
    limpiarHTML();
    //html que se le agregar c/producto. SIEMPRE FOR EACH!!!!
    productos.forEach(producto =>{
        const html = document.createElement('P');
        const {nombre, color, talla, marca, precio} = producto;
        //genero el html
        html.innerHTML = ` prenda:${nombre}- color: ${color} - talla ${talla} - marca: ${marca} - precio: ${precio} <br>`;
        //apendchaleo
        contendor.appendChild(html);

    })
}
// limpiarHTML();


//filtrar producto
function filtrarProducto(){
    const r = productos.filter(filtrarNombre).filter(filtrarMarca).filter(filtrarTalla).filter(filtrarColor).filter(filtrarPrecioAlto).filter(filtrarPrecioMedio).filter(filtrarPrecioBajo);
    console.log(r);
    if(r){
        mostrarProductos(r);
    }
}

function filtrarNombre(producto){
    if(productoOB.nombre){
       return producto.nombre === productoOB.nombre;
    } 
    return producto;
    
   
}

function filtrarMarca(producto){
    // const {marca} = productoOB;
    // if(marca){
    //     producto.marca === marca;
    //  } 
    //  return producto;
    if(productoOB.marca){
        return producto.marca === productoOB.marca;
     } 
     return producto;
}

function filtrarTalla (producto){
    if(productoOB.talla){
        return producto.talla === productoOB.talla;
    }
    return producto;
}
 function filtrarColor(producto){
    if(productoOB.color){
       return producto.color === productoOB.color;
    }
    return producto;
 }

 function filtrarPrecioAlto(producto){
    if(productoOB.precio ==="alto"){
        // console.log(typeof(producto.precio));
        // console.log(typeof(0.00));
        console.log(producto.precio);
       return producto.precio === 70.00;
    }
    return producto;

 }
 function filtrarPrecioMedio(producto){
    if(productoOB.precio === "medio"){
        // console.log(typeof(producto.precio));
        // console.log(typeof(0.00));
       return producto.precio >= 30.00 && producto.precio < 60.00;
    }
    return producto;

 }
 function filtrarPrecioBajo(producto){
    if(productoOB.precio === "bajo"){
        // console.log(typeof(producto.precio));
        // console.log(typeof(0.00));
        return producto.precio > 0.00 && producto.precio < 30.00;
    }
    return producto;

 }