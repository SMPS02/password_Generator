//VARIABLES GLOBALES
//-------------------------------------------------

//Boton que genera las contraseñas
const button = document.getElementById("button");

//Contenedor que contiene las contraseñas
const ul = document.getElementById("ul")

//Array para sacar los caracteres de los cuales se formará la constraseña
const caracteres = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "a", "A", "b", "B",
    "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", 
    "j", "J", "k", "K", "l", "L","m", "M", "n", "N", "o", "O", "p", "P", 
    "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", 
    "x", "X", "z", "Z" 
]

//Contraseñas extraidas del local Storage
const contraseñasDelLocal = obtenerDelLocal();

//Arreglo que sirve para almacenar la contraseña
let cajaDeContraseñas = contraseñasDelLocal || [] 


//FUNCIONES

//Fucnion para guardar las constraseñas en el local
function agregarAlLocal(){
    localStorage.setItem("contraseña", JSON.stringify(cajaDeContraseñas));
}

//Función para obetener las constraseñas del local
function obtenerDelLocal(){
    return JSON.parse(localStorage.getItem("contraseña"));
}

//Función para generar la contraseña en el HTML
function subirAlHtml({texto, id}){
    ul.innerHTML +=  
    `
     <li class="password" id= "${id}">
        ${texto}
     </li>
     `
}

function numeroRandom(){

    const numero = Math.floor(Math.random() * caracteres.length);
    return numero
}

function numeroRandomLimitado(){
return Math.floor(Math.random() * (16-8 + 1) + 8)
}
//EVENTOS

document.addEventListener("click", (e)=>{

    if(e.target.classList.contains("buttonGenerator")){

        const contraseñaYaCreada = e.target.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
        localStorage.removeItem("contraseña");
        cajaDeContraseñas = [];
        ul.innerHTML = ""
        

        //--------------------------------------------------------
        //--------------------------------------------------------
        let contraseñaGenerada = "";

        for(let i = 0; i<numeroRandomLimitado();i++){
           contraseñaGenerada += caracteres[numeroRandom()]
        }

        const contraseña = {
            texto: contraseñaGenerada,
            id: crypto.randomUUID()
        }

        cajaDeContraseñas = [...cajaDeContraseñas, contraseña];
        subirAlHtml(contraseña);
        agregarAlLocal();
        console.log(contraseñaYaCreada);
        }
    }

    
)
window.addEventListener("DOMContentLoaded", ()=>{

    cajaDeContraseñas.forEach(subirAlHtml);
} )

