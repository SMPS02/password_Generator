console.log("Generador de contraseñas");

//VARIABLES GLOBALES

const inputNumero = document.getElementById("inputNumber");
let contraseña = document.getElementById("textHolder");
const botonGenerador = document.getElementById("generador");
const botonCopiar = document.getElementById("copiar");

//Arrays
const alfabeto = [
    "a", "A", "b", "B",
    "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", 
    "j", "J", "k", "K", "l", "L","m", "M", "n", "N", "o", "O", "p", "P", 
    "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", 
    "x", "X", "z", "Z" 
]
const numeros = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]
const caracteresESP = [
    "@", "#", "&", "?", "¿", "!", "¡"
]

//CheckBoxes
const checkBoxGroup = document.querySelectorAll(`input[name="opcion"]`);
checkBoxGroup.forEach(cb =>{
   cb.addEventListener("change", () =>{
        const marcados =[...checkBoxGroup].filter(cb => cb.checked);

        if(marcados.length === 0){
            cb.checked = true;
        }
    })
})


//Funcion(es)
function numeroRandom(numero){

    switch(numero){
        case 1:
            const randomAlfabeto = Math.floor(Math.random()*alfabeto.length);
            return randomAlfabeto;
        break;
        case 2:
            const randomNumeros = Math.floor(Math.random() *numeros.length);
            return randomNumeros; 
        break;
        case 3:
            const randomESP = Math.floor(Math.random()*caracteresESP.length);
            return randomESP;
        break;
        case 4:
            let fusion_1 = []
            for(let i=0;i<alfabeto.length;i++){
                fusion_1 = [...fusion_1, alfabeto[i]];
            }
            for(let i=0;i<numeros.length;i++){
                fusion_1 = [...fusion_1, numeros[i]];
            }

            const numeroAlfabeto = Math.floor(Math.random()*fusion_1.length); 
            return numeroAlfabeto;
        break;
        case 5:
            let fusion_2 = []
            for(let i=0;i<alfabeto.length;i++){
                fusion_2 = [...fusion_2, alfabeto[i]];
            }
            for(let i=0;i<caracteresESP.length;i++){
                fusion_2 = [...fusion_2, caracteresESP[i]];
            }
        
            const alfabetoESP = Math.floor(Math.random()*fusion_2.length);

            return alfabetoESP;

        break;
        case 6:
            let fusion_3 = []
            for(let i=0;i<numeros.length;i++){
                fusion_3 = [...fusion_3, numeros[i]];
            }
             for(let i=0;i<caracteresESP.length;i++){
                fusion_3 = [...fusion_3, caracteresESP[i]];
            }
            const numeroESP = Math.floor(Math.random()*fusion_3.length);

            return numeroESP;
            
        break;
        case 7:
            let fusion_4 = [];
             for(let i=0;i<alfabeto.length;i++){
                fusion_4 = [...fusion_4, alfabeto[i]];
            }
            for(let i=0;i<numeros.length;i++){
                fusion_4 = [...fusion_4, numeros[i]];
            }
             for(let i=0;i<caracteresESP.length;i++){
                fusion_4 = [...fusion_4, caracteresESP[i]];
            }

            const numAlfESP = Math.floor(Math.random()*fusion_4.length);
            return numAlfESP;
        break;
        default:
        return console.log("Este parametro es invalido");
        break;
    }
    // const numero = Math.floor(Math.random() * caracteres.length);
    // return numero
}

function crearContraseña(){

    let contraseñaGenerada = "";
    
    const  seleccionados = [...document.querySelectorAll(`input[name="opcion"]:checked`)]
    .map(cb => cb.value)
    .sort()
    .join("+");

    const acciones = {
    'abc': () => {
        for(let i = 0;i<inputNumero.valueAsNumber;i++){
            contraseñaGenerada+=alfabeto[numeroRandom(1)];
        }
        contraseña.textContent = contraseñaGenerada;
    },
    '123': () => {
        for(let i = 0;i<inputNumero.valueAsNumber;i++){
            contraseñaGenerada+=numeros[numeroRandom(2)]
        }
        contraseña.textContent = contraseñaGenerada;
    },
    '@%&': () => {
        for(let i = 0;i<inputNumero.valueAsNumber;i++){
            contraseñaGenerada+=caracteresESP[numeroRandom(3)]
        }

        contraseña.textContent = contraseñaGenerada;
    },
    '123+abc': () => {
         let fusion_1 = []
            for(let i=0;i<alfabeto.length;i++){
                fusion_1 = [...fusion_1, alfabeto[i]];
            }
            for(let i=0;i<numeros.length;i++){
                fusion_1 = [...fusion_1, numeros[i]];
            }

            for(let i = 0;i<inputNumero.valueAsNumber;i++){
                contraseñaGenerada+=fusion_1[numeroRandom(4)];
            }
            contraseña.textContent = contraseñaGenerada;
    },
    '@%&+abc': () => {
       let fusion_2 = []
            for(let i=0;i<alfabeto.length;i++){
                fusion_2 = [...fusion_2, alfabeto[i]];
            }
            for(let i=0;i<caracteresESP.length;i++){
                fusion_2 = [...fusion_2, caracteresESP[i]];
            } 
        //----------------------------------------------------------
        //----------------------------------------------------------

            for(let i = 0;i<inputNumero.valueAsNumber;i++){
                contraseñaGenerada+=fusion_2[numeroRandom(5)]

            }
            contraseña.textContent = contraseñaGenerada
        
            
    },
    '123+@%&': () => {
        let fusion_3 = []
         for(let i=0;i<numeros.length;i++){
                fusion_3 = [...fusion_3, numeros[i]];
            }
             for(let i=0;i<caracteresESP.length;i++){
                fusion_3 = [...fusion_3, caracteresESP[i]];
            }
        //----------------------------------------------------------  
        //----------------------------------------------------------  
        for(let i = 0;i<inputNumero.valueAsNumber;i++){
               
            contraseñaGenerada+=fusion_3[numeroRandom(6)]
            }
            contraseña.textContent = contraseñaGenerada
    },
    '123+@%&+abc': () => {

         let fusion_4 = [];
             for(let i=0;i<alfabeto.length;i++){
                fusion_4 = [...fusion_4, alfabeto[i]];
            }
            for(let i=0;i<numeros.length;i++){
                fusion_4 = [...fusion_4, numeros[i]];
            }
             for(let i=0;i<caracteresESP.length;i++){
                fusion_4 = [...fusion_4, caracteresESP[i]];
            }
        //----------------------------------------------------------
        //----------------------------------------------------------
        for(let i = 0;i<inputNumero.valueAsNumber;i++){
                contraseñaGenerada+=fusion_4[numeroRandom(7)]
        }
        contraseña.textContent = contraseñaGenerada
    },
  };

   if (acciones[seleccionados]) {
    acciones[seleccionados]();  
  } else {
    console.log('Combinación no contemplada');
  }


}

function copiarContraseña(){

    if(contraseña.textContent === ""){
        alert("No hay nada para copiar")
        return;

    }else{
        navigator.clipboard.writeText(contraseña.textContent).then(()=>{    
        alert("Contraseña copiada")
    }).catch((err)=>{
        alert("Error en cargar la contraseña");
    })
    }
   
}
    
    
//Eventos

document.addEventListener("click", (e)=>{

    //Crear la contraseña
    if(e.target.classList.contains("generador") || e.target.classList.contains("play")){
       crearContraseña();
        
    }

    //Copiar la contraseña
    if(e.target.classList.contains("copiar")){
        copiarContraseña();
    }
    console.log(e.target);
})