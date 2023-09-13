
interface Reproductor
{
    volumen:number;
    segundos:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles
{
    cantante:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:100,
    segundos:120,
    cancion:"Alive",
    detalles:{
        cantante:"Desconocido",
        year:2001
    }
}

/**/

const{volumen, detalles}=reproductor
const{cantante}=detalles
console.log(`El volumen actual es: ${volumen}`);
console.log(`El volumen actual es: ${cantante}`);

const colores:string[]=["rojo", "azul", "verde", "morado"];
console.log(`Color1 : ${colores[0]}`)
console.log(`Color1 : ${colores[1]}`)
console.log(`Color1 : ${colores[2]}`)
console.log(`Color1 : ${colores[3]}`)
const[a,,,b]=colores;

console.log(`Color1 : ${a}`)
console.log(`Color1 : ${b}`)