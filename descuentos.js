//const preciooriginal = 120;
//const descuento = 18;



//console.log ({
    //preciooriginal,
    //descuento,
    //porcentajepreciocondescuento,
    //preciocondescuento
//});

function calcularpreciocondescuento(precio, descuento){
    const porcentajepreciocondescuento = 100 - descuento;
    const preciocondescuento = (precio * porcentajepreciocondescuento)/100;

    return preciocondescuento;
};

function onclickbuttonpricediscount(){
    const inputprice = document.getElementById("inputprice");
    const inputdiscount = document.getElementById("inputdiscount");

    const pricevalue = inputprice.value;
    const discountvalue = inputdiscount.value;

    const preciocondescuento = calcularpreciocondescuento(pricevalue, discountvalue);

    const result = document.getElementById("resultprice");
    result.innerText = "El precio con descuento son: $" + preciocondescuento
};

///Array con cupones

const cupones = [
    "ABCD",
    "EFGH",
    "IJKML",
    ];

function onclickbuttoncupondescuento(){

    const inputprice = document.getElementById("inputprice");
    const inputcupon = document.getElementById("inputcupon");
    
    const cuponvalue = inputcupon.value;
    const pricevalue = inputprice.value;

let descuento; 

switch(cuponvalue) {
    case cupones [0]: descuento = 15;

    break;
    
    case cupones [1]: descuento = 30;

    break;

    case cupones [2]: descuento = 25;

    break;
}




const precioconcupon = calcularpreciocondescuento (pricevalue, descuento);

const resultado = document.getElementById("resultadocupon");
resultado.innerText = "Cupon valido por un " + descuento + "% de descuento."+ " El precio con descuento son $" + precioconcupon;

};