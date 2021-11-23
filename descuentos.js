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