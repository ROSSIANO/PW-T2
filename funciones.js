var num1
var num2
var operacion
var resultado



function init() {
    var result = document.getElementById("result");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuarto = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis= document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

    uno.onclick = function(e){
        result.textContent = result.textContent + "1";
    }
    dos.onclick = function(e){
        result.textContent = result.textContent + "2";
    }
    cero.onclick = function(e){
        result.textContent = result.textContent + "0";
    }
    tres.onclick = function(e){
        result.textContent = result.textContent + "3";
    }
    cuatro.onclick = function(e){
        result.textContent = result.textContent + "4";
    }
    cinco.onclick = function(e){
        result.textContent = result.textContent + "5";
    }
    seis.onclick = function(e){
        result.textContent = result.textContent + "6";
    }
    siete.onclick = function(e){
        result.textContent = result.textContent + "7";
    }
    ocho.onclick = function(e){
        result.textContent = result.textContent + "8";
    }
    nueve.onclick = function(e){
        result.textContent = result.textContent + "9";
    }
    reset.onclick = function(e){
        Resetear();
    }
    suma.onclick = function(e){
        num1 = result.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        num1 = result.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        num1 = result.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        num1 = result.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        num2 = result.textContent;
      resolver();
    }
}
function limpiar(){
    result.textContent = ""; 
}
function Resetear(){
    result.textContent = ""; 
    num1="";
    num2="";
    operacion="";
} 
function resolver(){
    switch(operacion){
        case"+":
            resultado= parseFloat(num1) + parseFloat(num2);
            break;
           
        case"-":
            resultado= parseFloat(num1)- parseFloat(num2);
            break;
        case"*":
            resultado= parseFloat(num1)* parseFloat(num2);
            break;
        case"/":
            resultado= parseFloat(num1)/ parseFloat(num2);
            break;
    }
    localstorage();
    result.textContent= resultado;
    function localstorage() {
        let guardar={
            num1,num2,operacion,resultado
        }
        n=1;
        x=0;
        while (x<1){
            localStorage.setItem( azar,JSON.stringify(guardar)) 
            n=n+1;



        }
        
        
    }
}