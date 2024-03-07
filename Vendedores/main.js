function main(){
   let salida =document.getElementById("salida")
   salida.innerHTML+= "Ejercicio Vendedores"
   let vendedor1 = new cl_Novato (11,20,100,50)
   let vendedor2 = new cl_Novato (33,40,80,100)
   let vendedor3 = new cl_Novato(55,15,60,150)
   let vendedor4 = new cl_Novato(66,10,50,50)
   let experto3= new cl_Experto(22,30,40,3000)
   let experto4= new cl_Experto(77,10,25,6000)
   let experto2= new cl_Experto(99,60,120,12000)
   let experto1= new cl_Experto(11,8,32,2100)

   let compania= new cl_Compania()
     compania.procesar(vendedor1)
     compania.procesar(vendedor2)
     compania.procesar(vendedor3)
     compania.procesar(vendedor4)
     compania.procesar(experto3)
     compania.procesar(experto4)
     compania.procesar(experto2)
     compania.procesar(experto1)

    salida.innerHTML+=`<h3>Novatos</h3`
   salida.innerHTML+=`<br>codigo= ${vendedor1.codigo},ventas=${vendedor1.ventas} Clientes=${vendedor1.cliente} Rendimiento${vendedor1.rendimiento()}, Bono:${vendedor1.bono()},pagomensual: ${vendedor1.pagoMensual()}</br>`
   salida.innerHTML+=`<br>codigo= ${vendedor2.codigo},ventas=${vendedor2.ventas} Clientes=${vendedor2.cliente}Rendimiento${vendedor2.rendimiento()}  Bono:${vendedor2.bono()},pagomensual: ${vendedor2.pagoMensual()}</br>`
   salida.innerHTML+=`<h3>Expertos</h3`
   salida.innerHTML+=`<br>codigo= ${experto3.codigo},ventas=${experto3.ventas} Clientes=${experto3.cliente}Rendimiento${experto3.rendimiento()}  Bonificacion:${experto3.bonificacion()},pagomensual: ${experto3.pagoMensual()},</br>`
   salida.innerHTML+=`<br>codigo= ${experto4.codigo},ventas=${experto4.ventas} Clientes=${experto4.cliente}Rendimiento${experto4.rendimiento()}  Bonificacion:${experto4.bonificacion()},pagomensual: ${experto4.pagoMensual()},</br>`
   salida.innerHTML+=`<br>codigo= ${experto2.codigo},ventas=${experto2.ventas} Clientes=${experto2.cliente}Rendimiento${experto2.rendimiento()}  Bonificacion:${experto2.bonificacion()},pagomensual: ${experto2.pagoMensual()},</br>`
   salida.innerHTML+=`<br>codigo= ${experto1.codigo},ventas=${experto1.ventas} Clientes=${experto1.cliente}Rendimiento${experto1.rendimiento()}  Bonificacion:${experto1.bonificacion()},pagomensual: ${experto1.pagoMensual()},</br>`
   salida.innerHTML+=`<br>${compania.acumSaldoExperto}, Promedio pagomensual= $${compania.promedio_Pago_Mensual()}</br>`

}   

class cl_vendedor {
    constructor(c,v,cl){
    this.codigo=c;
    this.ventas=v;
    this.cliente=cl;
}
    rendimiento(){
        return this.ventas/this.cliente*10
    }
}
class cl_Novato extends cl_vendedor{
    constructor(c,v,cl,s){
        super(c,v,cl)
        this.sueldo=s
    }
    bono(){
        return this.rendimiento()*10
    }
    pagoMensual(){
        return  this.bono()+this.sueldo

    }
}


    class cl_Experto extends cl_vendedor{
        constructor(c,v,cl,a){
            super(c,v,cl)
            this.anualidad=a;
        }

        bonificacion(){
            return (this.rendimiento()*2)*100
        }

        Mensual(){
            return this.anualidad/12
        }

        pagoMensual(){
            return this.bonificacion()+ this.Mensual()
        }


    }

    class cl_Compania{
        constructor(){
            this.acumSaldoExperto= 0
            this.contTotalVendedor= 0
        }

        procesar(v){
           
            if(v instanceof cl_Experto){
                this.acumSaldoExperto+= v.pagoMensual()
                this.contTotalVendedor++

            }

           
        }
        promedio_Pago_Mensual(){
        return this.acumSaldoExperto/this.contTotalVendedor
        }
    
    }


main() 