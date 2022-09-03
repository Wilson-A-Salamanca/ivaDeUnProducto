const nombre = document.getElementById("nombre");
const costo = document.getElementById("costo");
const mostrar = document.getElementById("mostrar");
const resultados = document.getElementById("resultados")

let texto = "";
let dinero = 0;
let IVA = 0;

nombre.addEventListener("change", (e) => {
    texto = e.target.value;
})


costo.addEventListener("change" , (e) => {
    dinero = e.target.value;
})


class Producto {
    constructor(name, costo, iva, resultado){
        this.name = name;
        this.costo = costo;
        this.iva = iva;
        this.resultado = resultado;
    }
    
    calculoIVA() {
        this.iva = this.costo * 19 / 100;
        this.resultado = parseInt(this.costo) + parseInt(this.iva);
    }



    showProductIVA() {
       return "Nombre del producto: " + this.name + ". Costo original del producto: " + this.costo + ". El iva del producto: " + this.iva + ". El costo del producto con iva: " + this.resultado + "."; 
    }
}


mostrar.addEventListener("click", () => {
    let producto = new Producto(texto , dinero , IVA);

    producto.calculoIVA();

    const text = document.createElement("p");
    text.innerHTML = producto.showProductIVA();

    resultados.appendChild(text);
});
