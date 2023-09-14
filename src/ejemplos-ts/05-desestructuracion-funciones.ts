
interface Producto
{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:"Huaweii",
    precio:5000,
}

const tablet:Producto={
    desc:"Sony",
    precio:8000
}

function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })

    return total*0.16;
}

const articulos1=[telefono,tablet];
const iva1=calcularIVA(articulos1);
console.log(`IVA: ${iva1}`);