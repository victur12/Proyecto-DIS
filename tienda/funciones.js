let productos = [[0,"coca", 12],
                [1, "galletas", 8],
                [2,"agua",5],
                [3, "panditas", 7], 
                [4 ,"picafresas",1 ]];

let carrito=[];

window.addEventListener("load", cargar);
function cargar(){

    s=document.querySelector('section');
    for ( i= 0; i < productos.length; i++) {
        
        s.innerHTML += " <div id='"+ productos[i][0] +"'>"+ 
                            "<h1>"+ productos[i][1] +"</h1>"+
                            "<p>$"+ productos[i][2] +"</p>"+
                            "<button onclick='agregar("+ productos[i][0] +")'>+</button>"+
                        "</div> ";
    }

}

function agregar(id){
    carrito.push(id);
    document.querySelector('s').innerHTML=carrito.length;
}

function mostrarCarrito(){
    listaProductos = document.querySelector('nav');
    for ( i = 0; i < carrito.length; i++) {
        for (let j = 0; j < productos.length; j++) {
            if (productos[j][0]== carrito[i]) {
                listaProductos.innerHTML += " <div id='lista'>"+ 
                "<h1>"+ productos[j][1] +"</h1>"+
                "<h1>$"+ productos[j][2] +"</h1>"+

            "</div> ";
            }            
        }
    }
}

function visibilidad(){
    document.querySelector('nav').classList.toggle("visible");
    document.querySelector('Section').classList.toggle("sn");
    mostrarCarrito();

}