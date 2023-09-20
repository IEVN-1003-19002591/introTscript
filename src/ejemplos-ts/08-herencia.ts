class Persona3
{
   protected nombre:string;
   protected edad:number;
   constructor(nombre:string, edad:number)
   {
    this.nombre=nombre;
    this.edad=edad;
   }

   imprimr()
   {
    console.log(`Nombre : ${this.nombre}`)
    console.log(`Edad : ${this.edad}`)
   }
}

class Empleado extends Persona3
{
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number)
    {
        super(nombre, edad);
        this.sueldo=sueldo;
    }

    imprimr()
    {
        super.imprimr();
        console.log(`Sueldo : ${this.sueldo}`);
    }

    pagaImpuestos()
    {
        if(this.sueldo>5000)
        console.log(`${this.sueldo} debe pagar impuestos`);
    else
    console.log(`${this.sueldo} no debe pagar impuestos`);
    }
}

const persona4 = new Persona3("Juan", 24)
persona4.imprimr();

const empleado1 = new Empleado("Ana", 23, 7000)
empleado1.imprimr();
empleado1.pagaImpuestos();