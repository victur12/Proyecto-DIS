function iniciar(){

    cargar();
    respuesta = prompt("1.AGREGAR\n 2.Ver\n3.Buscar\n4.Editar\n5 Salir");

    switch(respuesta){

        case('1'):

            agregarContacto();

            break;

        case('2'):

            verContacto();

            break;

        case('3'):

            buscarContacto();

            break;

        case('4'):

            editarContacto();

            break;

        case('5'):

            alert("Saliste de la agenda")

            break;

        default:

            alert("opcion no validad, intentalo de nuevo")
            iniciar();

            break;

    }
}





function agregarContacto(){

    nom = prompt("nombre");
    num = prompt("Número");
    cor = prompt("Correo");

    nombres.push(nom);
    numeros.push(num);
    correos.push(cor);

    guardar();


    repetir = prompt("Deseas agregar otro contacto Si/no");

    if (repetir=="si") {

        agregarContacto();
        
    }else{

        iniciar();
    }

}

function verContacto(){

    for(i=0; i<nombres.length; i++){

        alert("Nombre " + nombres[i] + "\nNumeros "+ numeros[i]+ "\nCorreos " + correos[i]);

    }
    iniciar();

}


function buscarContacto(){
    busqueda = prompt("Cuál es el nombre del contacto");
    indice = nombres.indexOf(busqueda);

    if (indice>= 0) {
        
        alert("Nombre " + nombres[indice] + "\nNumeros "+ numeros[indice]+ "\nCorreos " + correos[indice])
    }else{
        alert("No se encontro ningun resultado");
    }
    iniciar();
}

function editarContacto(){
    busqueda = prompt("Cuál es el nombre del contacto");
    indice = nombres.indexOf(busqueda);

    if (indice>= 0) {

        nuevoNom = prompt("¿cuál es el nuevo nombre");
        nuevoNum = prompt("¿cuál es el nuevo numero");
        nuevoCor = prompt("¿cuál es el nuevo correo");

        nombres[indice] = nuevoNom;
        numeros[indice] = nuevoNum;
        correos[indice] = nuevoCor;

        guardar();

    }else{

        alert("No se encontro ningun resultado");

    }
    iniciar();
}


function guardar(){

    localStorage.setItem("nombresLS",nombres );
    localStorage.setItem("numerosLS",numeros );
    localStorage.setItem("correosLS",correos);

}

function cargar() {

    if (localStorage.getItem("nombresLS")) {

        //Sacar los datos
        nombres = localStorage.getItem("nombresLS");
        numeros = localStorage.getItem("numerosLS");
        correos = localStorage.getItem("correosLS");
        console.log(nombres);

        //hacerlos Arreglo

        nombres = nombres.split(',');
        numeros = numeros.split(',');
        correos = correos.split(',');


    } else {

        //crear los arreglos
        nombres = [];
        numeros = [];
        correos = [];
        
    }
    
}