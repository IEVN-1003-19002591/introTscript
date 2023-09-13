

function sumar():void
{
    console.log(3+7);
}

sumar()

function sumar2(a:number,b:number):number
{
   return (a+b)
}

const resultado = sumar2(4,4)
console.log(resultado)

interface mascotas
{
    nombre:string;
    edad:number;
    mostrarEdad: ()=>void;
}

function calcular(mascotas:mascotas, x:number):void
{
    mascotas.edad+=x;
    console.log(mascotas);
}

const nuevaMascota:mascotas={
    nombre: "Gato", edad: 1, mostrarEdad():void{console.log("la edad es; ", this.edad)}
};

calcular(nuevaMascota, 3);