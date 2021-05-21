let p1=document.getElementById('pantalla1');
let p2=document.getElementById('pantalla2');
let centro = document.getElementById('Centro');
function agregar(num){
    p1.innerHTML+=num
    
    if(p1.innerHTML.length>=3){
    calcular();
    }
}   

function calcular(){
    p2.innerHTML=eval(p1.innerHTML);
}

function borrar(){
    p1.innerHTML="";
    p2.innerHTML="";
}

function resultado(){
    p1.innerHTML= p2.innerHTML;
    p2.innerHTML="";


}

function Claro(){
	centro.classList.add('Claro');
	centro.classList.remove('Oscuro');
	//guardamos en la variable boton los elementos del HTML
	//que tengan la clase ".boton"
	let boton=document.querySelectorAll('.Botones');
	let t=boton.length;

	for(i=t-1;i>=0;i--){
		boton[i].classList.remove('toscuro');
		boton[i].classList.add('tclaro');
	}
	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
	document.querySelector('.fa-sun').classList.add('Activado');
	document.querySelector('.fa-moon').classList.remove('Activado');
	document.querySelector('body').classList.add('Oscuro');
	document.querySelector('body').classList.remove('Claro');

	

}

function oscuro(){
	centro.classList.add('Oscuro');
	centro.classList.remove('Claro');
	//guardamos en la variable boton los elementos del HTML
	//que tengan la clase ".boton"
	let boton=document.querySelectorAll('.Botones');
	let t=boton.length;
	for(i=t-1;i>=0;i--){
		boton[i].classList.remove('tclaro');
		boton[i].classList.add('toscuro');
	}
	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
	document.querySelector('.fa-moon').classList.add('Activado');
	document.querySelector('.fa-sun').classList.remove('Activado');
	document.querySelector('body').classList.add('Claro');
	document.querySelector('body').classList.remove('Oscuro');
}