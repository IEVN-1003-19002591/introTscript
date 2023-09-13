


interface Alumno
{
    matricula:number;
    nombre:string;
    edad:number;
    email:string;
}

const alumno:Alumno = {
    nombre: "luis",
    email: "luis@gmail",
    edad:22,
    matricula:19002591
}

let mascotas = ["perro", "gato", "pajaro"]
console.table(mascotas);
mascotas[1]="nuevo gato";
mascotas.push("perico verde")
console.table(mascotas);

let nuevoArre:(number|string)[]=[]
nuevoArre.push("RCR");
nuevoArre.push(123456);