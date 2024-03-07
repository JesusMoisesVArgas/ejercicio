class CL_electrodomestico {
    constructor(codigo) {
        this.codigo = codigo;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }

}

class CL_lineablanca extends CL_electrodomestico {
    constructor(codigo, preciobase) {

        super(codigo)
        this.preciobase = preciobase


    }
    precioTotal() {
        return this.Precio() + this.Iva()
    }

    Iva() {
        return this.Precio() * 0.16
    }

    Precio(){
return this.preciobase

    }
Giros(){
    
}

}

class CL_lineaMarron extends CL_electrodomestico {
constructor(codigo,tipo){
    super (codigo)
    this.tipo = tipo
}

    precioTotal() {
        return this.Precio() + this.Iva()
    }

    Iva() {
        return this.Precio() * 0.16
    }
    Precio(){
        if (this.tipo===1){
            return 200
        }
else if(this.tipo===2){
    return 100
}
else if(this.tipo===3){
    return 150
}
    }
}
class CL_tienda {
    constructor() {
        this.acumDineroLineaBlanca
        this.acumDineroLieaMarron
    }

}


function main() {
    let electrodomestico = new CL_lineablanca(222)
    let electrodomestico1 = new CL_lineablanca(111)
    let electrodomestico2 = new CL_lineablanca(555)
    let electrodomestico3 = new CL_lineablanca(888)
    let electrodomestico4 = new CL_electrodomestico(444)
    let electrodomestico5 = new CL_electrodomestico(333)
    let electrodomestico6 = new CL_electrodomestico(777)
    let electrodomestico7 = new CL_electrodomestico(445)
    salida.innerHTML += `<br>codigo ${electrodomestico.codigo} preciobase ${electrodomestico.preciobase}$ `
    salida.innerHTML += `<br>codigo ${electrodomestico1.codigo} preciobase ${electrodomestico1.preciobase}$ `
    salida.innerHTML += `<br>codigo ${electrodomestico2.codigo} preciobase ${electrodomestico2.preciobase}$ `
    salida.innerHTML += `<br>codigo ${electrodomestico3.codigo} preciobase ${electrodomestico3.preciobase}$ `
    salida.innerHTML += `<br>codigo ${electrodomestico4.codigo} preciobase ${electrodomestico4.preciobase}$ `
    salida.innerHTML += `<br>codigo ${electrodomestico5.codigo} preciobase ${electrodomestico5.preciobase}$ `
    salida.innerHTML += `<br>codigo ${electrodomestico6.codigo} preciobase ${electrodomestico6.preciobase}$ `
    salida.innerHTML += `<br>codigo ${electrodomestico7.codigo} preciobase ${electrodomestico7.preciobase}$ `
}
main()